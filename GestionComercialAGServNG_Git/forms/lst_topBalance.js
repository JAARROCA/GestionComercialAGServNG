/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"98E1E4A5-0141-4CEE-908B-A8EBD7370947"}
 */
var html_resumen = null;

/**
 * @type {Array<String>}
 *
 *
 *
 * @properties={typeid:35,uuid:"49FCF018-7A21-4859-9078-75ADBF9BF4C0",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"E026EAF4-B49C-440A-9B19-BFF80A479B59"}
 */
var htmlresum = null;

/**
 * @type {String}
 *
  *
 * @properties={typeid:35,uuid:"45504FA4-F2D7-4765-B44C-9E8C54483BBE"}
 */
var chartjstype = 'pie';

/**
 * @return {String}
 * @properties={typeid:24,uuid:"A613F4B7-0C0D-4BAB-82B0-18616FF71755"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	html_resumen = null;
	htmlresum = null;
	
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	var HTML = '<html><body>'
	var dfech = forms[frm].DesdeFecha;
	if(!dfech) dfech = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	var hfech = forms[frm].HastaFecha;
	if(!hfech) hfech = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	/*if(dfech) var dyear = dfech.getFullYear()
	else dyear = new Date().getFullYear()
	if(hfech) var hyear = hfech.getFullYear()
	else hyear = new Date().getFullYear()*/
	
	var query = "select ISNULL(SUM(oi.impbie_cfa),0)+ISNULL(SUM(oi.impbie2_cfa),0)+ISNULL(SUM(oi.impbie3_cfa),0) "+//ISNULL(SUM(oi.impnee_cfa),0) 
	"from [tbFacturaCabecera] oi "+
	"where fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"'";		
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	var ventas = dataset.getValue(1,1)		
	
	query = "select ISNULL(SUM(oi.impbie1_cfca),0)+ISNULL(SUM(oi.impbie2_cfca),0)+ISNULL(SUM(oi.impbie3_cfca),0) "+// ISNULL(SUM(oi.impnee_cfca),0) 
			"from [tbFacturaCompraCabecera] oi where fecha_cfca between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
			"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"'";
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	var compras = dataset.getValue(1,1)	
	
	/*query = "select ISNULL(SUM(oi.Gasto),0) "+
			"from [tbCajaCabeceraLinea] oi where oi.fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
			"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"'";
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	var otrosgastos = dataset.getValue(1,1)	*/
	
	if(ventas == 0 && compras == 0 /*&& otrosgastos == 0*/)
	{
		//nothing sold to this customer
		HTML += '<div align="left"><b style="color:red;" class="largeRed">NO HAY NI VENTAS NI FACTURAS DE COMPRAS</b></div>';  //</html>
		html_resumen = HTML
		
	}
	else
	{
//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += "<table border=0 cellpadding='1'  bgcolor='#ffffff' width='100%'>"
		HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>VENTAS - COMPRAS ("+
		utils.dateFormat(dfech,'dd/MM/yyyy')+" - "+utils.dateFormat(hfech,'dd/MM/yyyy')+")</b></td></tr>"

		
		HTML += "<tr><td nowrap class='body'>VENTAS "+
		"</td><td  align='right' class='body'>"+ utils.numberFormat(ventas, "###,###,##0.00 €")+"</td></tr>";
		HTML += "<tr><td nowrap class='body'>COMPRAS "+
		"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(compras, "###,###,##0.00 €")+"</td></tr>";
		/*HTML += "<tr><td nowrap class='body'>PAGOS, OTROS GASTOS,..."+
		"</td><td nowrap align='right' class='body'>-"+ utils.numberFormat(otrosgastos, "###,###,##0.00 €")+"</td></tr>";
		*/
		

		var myPie = ''//plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(ventas, compras, dyear, hyear/*,otrosgastos*/),true, 1);
		//var server = plugins.VelocityReport.getServerURL()
		//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
		htmlresum =  '<html><head></head><body>'+myPie+'</body></html>';
		application.output(htmlresum)
		//put total line at bottom
		/** @type String */
		var totalLine = ventas-compras/*-otrosgastos*/;
		HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
		utils.numberFormat(totalLine, "###,###,##0.00 €") + "</b></td></tr>";
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><br><b style="color:red;">PARA SACAR INFORME COMPLETO PULSE BOTÓN IMPRIMIR</b></td></tr>';
		HTML += "</table>"+"</body>" +"</html>"

		html_resumen = HTML
	}
	return html_resumen
}

/**
* @return {String}
* @SuppressWarnings(deprecated)
*
 * @properties={typeid:24,uuid:"72CB29E7-D10D-49B8-ACEA-FB6A79F42CD2"}
 */
function draw_chartjs()
{
	html_resumen = null;
	htmlresum = null;
	
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	var HTML = '<html><body>'
	var dfech = forms[frm].DesdeFecha;
	if(!dfech) dfech = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	var hfech = forms[frm].HastaFecha;
	if(!hfech) hfech = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	
	var query = "select ISNULL(SUM(oi.impbie_cfa),0)+ISNULL(SUM(oi.impbie2_cfa),0)+ISNULL(SUM(oi.impbie3_cfa),0) "+//ISNULL(SUM(oi.impnee_cfa),0) 
	"from [tbFacturaCabecera] oi "+
	"where fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"'";		
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	var ventas = dataset.getValue(1,1)		
	
	query = "select ISNULL(SUM(oi.impbie1_cfca),0)+ISNULL(SUM(oi.impbie2_cfca),0)+ISNULL(SUM(oi.impbie3_cfca),0) "+// ISNULL(SUM(oi.impnee_cfca),0) 
			"from [tbFacturaCompraCabecera] oi where fecha_cfca between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
			"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"'";
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	var compras = dataset.getValue(1,1)	
	
	if(ventas == 0 && compras == 0 /*&& otrosgastos == 0*/)
	{
		//nothing sold to this customer
		HTML += '<div align="left"><b style="color:red;" class="largeRed">NO HAY NI VENTAS NI FACTURAS DE COMPRAS</b></div>';  //</html>
		html_resumen = HTML
		
	}
	else
	{
		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += "<table border=0 cellpadding='1'  bgcolor='#ffffff' width='100%'>"
		HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>VENTAS - COMPRAS ("+
		utils.dateFormat(dfech,'dd/MM/yyyy')+" - "+utils.dateFormat(hfech,'dd/MM/yyyy')+")</b></td></tr>"

		
		HTML += "<tr><td nowrap class='body'>VENTAS "+
		"</td><td  align='right' class='body'>"+ utils.numberFormat(ventas, "###,###,##0.00 €")+"</td></tr>";
		HTML += "<tr><td nowrap class='body'>COMPRAS "+
		"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(compras, "###,###,##0.00 €")+"</td></tr>";
		/*HTML += "<tr><td nowrap class='body'>PAGOS, OTROS GASTOS,..."+
		"</td><td nowrap align='right' class='body'>-"+ utils.numberFormat(otrosgastos, "###,###,##0.00 €")+"</td></tr>";
		*/
		
		var data = {
			type: '',
			data: {
				labels: [],
				datasets: []
			}
		}
		var datadatasets = {
			data: [],
			backgroundColor: [],
			hoverOffset: 4
		}
		//var label_callback2 = clientutils.generateBrowserFunction("function(context) { return ' $'+context.dataset.data[context.dataIndex] }");
		var options = {
			responsive: true,
			tooltips: {
				callbacks: {
					label: {
						isFunction: true,
						params: ['tooltipItem', 'data'],
						expression: "return ' $'+data.datasets[0].data[tooltipItem.index];"			
					}						
				}
			},
			plugins: {
	            legend: {
	                labels: {
	                    font: {
	                        /*family: 'Arial',
	                        size: 12,  */ 
	                        fontColor: 'black',
	                    	style: 'normal',
	                        weight: 'bold'
	                    }
	                }
	            }
	        }
		}
		
		
		if(!chartjstype) chartjstype = 'pie';
		data.type = chartjstype;		
		
			if(ventas || compras)
			{	
				if(ventas) {
					data.data.labels.push('VENTAS');
					datadatasets.data.push(ventas);
					datadatasets.backgroundColor.push(Colores[0]);
				}
				if(compras) {
					data.data.labels.push('COMPRAS');
					datadatasets.data.push(compras);
					datadatasets.backgroundColor.push(Colores[1]);
				}
			}
			data.data.datasets.push(datadatasets)
			
		
		elements.chart_topBalance.setData(data);
		elements.chart_topBalance.setOptions(options);
		
		//put total line at bottom
		/** @type String */
		var totalLine = ventas-compras/*-otrosgastos*/;
		HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
		utils.numberFormat(totalLine, "###,###,##0.00 €") + "</b></td></tr>";
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><br><b style="color:red;">PARA SACAR INFORME COMPLETO PULSE BOTÓN IMPRIMIR</b></td></tr>';
		HTML += "</table>"+"</body>" +"</html>"

		html_resumen = HTML
	}
	return html_resumen
	
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"35D93943-8C86-49AF-8D9C-EAB657A5B9EA"}
 */
function onResize(event) {
	if(!chartjstype) chartjstype = 'pie';	
	draw_chartjs()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"DB321777-C2CA-4465-B2C3-295337069A8D"}
 */
function onShow(firstShow, event) {
	elements.chart_topBalance.clearChart()
	chartjstype = 'pie';
	draw_chartjs()
	
}
