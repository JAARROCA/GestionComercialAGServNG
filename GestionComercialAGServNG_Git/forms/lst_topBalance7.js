/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5DA689BC-45D9-4A5C-A75C-9D12E1E18F4C"}
 */
var html_resumen = null;

/**
 * @type {Array<String>}
 *
 *
 *
 * @properties={typeid:35,uuid:"CD66D75D-7138-4F77-95B0-4393132260F3",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"B888D735-99B9-4512-B252-DBD381242373"}
 */
var htmlresum = null;

/**
 * @return {String}
 * @properties={typeid:24,uuid:"7002D920-371F-4B75-BD8E-66B515A77044"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	html_resumen = null;
	htmlresum = null;
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	var i;
	var HTML = '<html><body>'
	var dfech = forms[frm].DesdeFecha;
	if(!dfech) dfech = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	var hfech = forms[frm].HastaFecha;
	if(!hfech) hfech = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	

	var maxReturedRows = 15;
		
	/*var query =  "select cli.DescCliente, ISNULL(SUM(oi.impbie_cfa),0)+ISNULL(SUM(oi.impbie2_cfa),0)+ISNULL(SUM(oi.impbie3_cfa),0) "+// ISNULL(SUM(oi.impnee_cfa),0) 
	"from [tbFacturaCabecera] oi LEFT JOIN "+
	"[tbMaestroClientes] cli ON oi.clie_cfa = cli.IdCliente "+
	"where fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
	"' group by cli.IdCliente,cli.DescCliente order by 2 desc";*/
	
	var query = "SELECT ISNULL(D.Provincia,UPPER(e.PAI_NOMBRE)) as ZONA, ISNULL(SUM(C.impbie1_cfca),0)+ISNULL(SUM(C.impbie2_cfca),0)+ISNULL(SUM(C.impbie3_cfca),0) "+
	"FROM tbFacturaCompraCabecera as C LEFT JOIN "+
	"tbMaestroproveedores AS D ON C.pro_cfca = D.codpro "+
	"LEFT JOIN dbo.pais as e on d.Pais = e.PAI_ISO2 "+
	"where fecha_cfca between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
	"' group by D.Provincia,e.PAI_NOMBRE "+
	"ORDER BY ISNULL(SUM(C.impnee_cfca),0) desc,D.Provincia,e.PAI_NOMBRE"
	
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
	//var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999999);
	var maxRows = dataset.getMaxRowIndex()
	//var maxRows2 = dataset2.getMaxRowIndex()
	
	if(maxRows == 0)
	{
		//nothing sold to this customer
		HTML += '<div align="left"><b style="color:red;" class="largeRed">NO HAY FACTURAS DE VENTAS EN EL PERIODO INTRODUCIDO</b></div>';  //</html>
		html_resumen = HTML
		htmlresum = null
		
	}
	else
	{
//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += '<table border=0 cellpadding="1"  bgcolor="#ffffff" width="100%">\n'
		HTML += '<tr bgcolor="#cccccc"><td colspan=2 class="body"><b>Top 15 Clientes por Zonas ('+
		utils.dateFormat(dfech,'dd/MM/yyyy')+' - '+utils.dateFormat(hfech,'dd/MM/yyyy')+')</b></td></tr>'

		

		for( i = 1 ; i <= maxRows ; i++ )
		{
			dataset.rowIndex = i;
			if(dataset[1] != null && dataset[2] != null)
			{
				/*if(elements['chart_pie'] != null)
				{
					elements.chart_pie.setLegends(i-1,dataset[1])// set legends of chart
					elements.chart_pie.setValues(i-1, 0, dataset[2])
				}*/
				HTML += '<tr><td nowrap class="body">'+ utils.stringLeft(dataset[1],35)+
				'</td><td nowrap align="right" class="body">'+ utils.numberFormat(dataset[2], '###,###,##0.00 €')+'</td></tr>';
			}
		}

		var myPie = plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(dataset),true, 1);
		//var server = plugins.VelocityReport.getServerURL()
		//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
		htmlresum = '<html><head></head><body>'+myPie+'</body></html>';
		
		application.output(htmlresum)
		//put total line at bottom
		/** @type String */
		var totalLine = dataset.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total Ventas por Zonas: '+
		utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
		//if(maxRows2 > maxRows)
		//{
			HTML += '<tr><td nowrap colspan=2 align="right" class="body"><br><b style="color:red;">PARA SACAR INFORME COMPLETO PULSE BOTÓN IMPRIMIR</b></td></tr>';
		//}
		HTML += '</table>\n'+'</body>\n' //+'</html>'

		html_resumen = HTML
	}
	return html_resumen
}

/**
 * 
 * TODO generated, please specify type and doc for the params
 * @param dataset
 * @return {Object}
 * @SuppressWarnings(unused)
 * @properties={typeid:24,uuid:"A8ABAF78-BFC2-4F53-8C7B-EB0742327995"}
 * @SuppressWarnings(deprecated)
 */
function getPieChartDef(dataset) {
	try
	{
		var frm = currentcontroller.getName()
		if(frm == 'frm_nav_main_principalNGGC') {
			frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		}
		var dfech = forms[frm].DesdeFecha;
		var hfech = forms[frm].HastaFecha;
		/*var vquery = "select pro.descproveedor, SUM(oi.impnee_cfca) "+
		"from [tbFacturaCompraCabecera] oi LEFT JOIN "+
		"[tbMaestroProveedores] pro ON oi.pro_cfca = pro.codpro "+
		"where fecha_cfca between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
		"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
		"' group by pro.DescProveedor order by 2 desc";
		*/				
	    var result = dataset//databaseManager.getDataSetByQuery(globals.GCconex,vquery,null,-1)
	    var chartDef = {};
	    chartDef.title = 'Top 15 Ventas por Zonas ('+utils.dateFormat(dfech,'dd/MM/yyyy')+' - '+utils.dateFormat(hfech,'dd/MM/yyyy')+')';
	    chartDef.threeD = true;
	    chartDef.shadow = true;
	    chartDef.proportional = true;
	    chartDef.labelFontSize = 12;
	    chartDef.width = elements.html.getWidth() - 10/*360*/;
	    chartDef.height= elements.html.getHeight() - 10;
	    chartDef.legendPosition = "right";
	    chartDef.legendMargins = {horizontal: 10, vertical: 2};
	    chartDef.margins = {top: 10, left: 10, right: 10, bottom: 10};
	    chartDef.slices = new Array();
	    var maxRows = dataset.getMaxRowIndex()
		/** @type String */
		var totalLine = dataset.getColumnAsArray(2)
			totalLine = totalLine.join('+')
			totalLine = eval(totalLine);
			
	    for(var i=1; i <= maxRows; i++) 
	    {
	        result.rowIndex = i;
	        var percent = dataset.getValue(i,2);
	        var text = utils.stringLeft(dataset.getValue(i,1),25);
	        var color = Colores[i-1];        
	        if(percent > 0) var porc = (percent * 100)/totalLine;
	        else porc = 0;
	        var slice = { percent: percent, label: utils.numberFormat(porc,'###,###,##0.00')+'%', legend: text , color: color };
	        chartDef.slices.push(slice);
	    }
	    chartDef.orientation = 45;
	    //etc.
	   
	}
	catch(ex)
	{
		application.output(ex)
	}
	finally
	{
		 return chartDef;
	}
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"19EB1801-3839-4539-BA05-5140D7144786"}
 */
function onResize(event) {
	// TODO Auto-generated method stub
	draw_chart()
}
