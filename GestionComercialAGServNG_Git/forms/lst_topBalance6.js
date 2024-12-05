/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"349C0DEC-AFB1-4EF3-9C50-1A7A98201F7B"}
 */
var html_resumen = null;

/**
 * @type {Array<String>}
 *
 *
 *
 * @properties={typeid:35,uuid:"B560352F-1D31-4680-9D6D-A6A36C2489FC",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"F1D0199B-BBD4-4941-B085-C51ED51D6024"}
 */
var htmlresum = null;

/**
 * @return {String}
 * @properties={typeid:24,uuid:"0CB41CE8-C7CC-444B-8283-3A402279ADE4"}
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
	
	var query = "SELECT ISNULL(D.Provincia,UPPER(e.PAI_NOMBRE)) as ZONA, ISNULL(SUM(C.impbie_cfa),0)+ISNULL(SUM(C.impbie2_cfa),0)+ISNULL(SUM(C.impbie3_cfa),0) "+
	"FROM tbFacturaCabecera as C LEFT JOIN "+
	"tbMaestroClientes AS D ON C.clie_cfa = D.IdCliente "+
	"LEFT JOIN dbo.pais as e on d.Pais = e.PAI_ISO2 "+
	"where fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
	"' group by D.Provincia,e.PAI_NOMBRE "+
	"ORDER BY ISNULL(SUM(C.impnee_cfa),0) desc,D.Provincia,e.PAI_NOMBRE"
	
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
 * @properties={typeid:24,uuid:"AE08AA92-A92C-42AC-9371-FDD8DBF6D6E4"}
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
 * @properties={typeid:24,uuid:"97486BEB-7889-408B-81ED-B0F721AF7788"}
 */
function onResize(event) {
	// TODO Auto-generated method stub
	draw_chart()
}
