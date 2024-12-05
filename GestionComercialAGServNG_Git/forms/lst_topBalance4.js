/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"7DD92DC0-BD26-4280-9F52-1A508BF7DE15"}
 */
var html_resumen = null;

/**
 * @type {Array<String>}
 *
 *
 *
 * @properties={typeid:35,uuid:"E7A5EBB1-7DFA-4FCF-8E90-4C1EA4289332",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"41AC6A02-A164-4577-AD1F-6FF8DD10CA55"}
 */
var htmlresum = null;

/**
 * @type {String}
 *
  *
 *
 *
 *
 * @properties={typeid:35,uuid:"8BFBAFEF-423B-457D-9704-FF17CF84D676"}
 */
var chartjstype = 'pie';

/**
 * @return {String}
 * @properties={typeid:24,uuid:"D4BD8162-5949-4895-9526-0F5409C4087E"}
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
		
	var query =  "select cli.DescCliente, ISNULL(SUM(oi.impbie_cfa),0)+ISNULL(SUM(oi.impbie2_cfa),0)+ISNULL(SUM(oi.impbie3_cfa),0) "+// ISNULL(SUM(oi.impnee_cfa),0) 
	"from [tbFacturaCabecera] oi LEFT JOIN "+
	"[tbMaestroClientes] cli ON oi.clie_cfa = cli.IdCliente "+
	"where fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
	"' group by cli.IdCliente,cli.DescCliente order by 2 desc";
	
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
		HTML += '<tr bgcolor="#cccccc"><td colspan=2 class="body"><b>Top 15 Clientes ('+
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

		var myPie = ''//plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(dataset),true, 1);
		//var server = plugins.VelocityReport.getServerURL()
		//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
		htmlresum = '<html><head></head><body>'+myPie+'</body></html>';
		
		application.output(htmlresum)
		//put total line at bottom
		/** @type String */
		var totalLine = dataset.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total Ventas: '+
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
 * @return {String}
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"DC63B0C0-5DA2-4FEB-B575-23D0253867F7"}
 */
function draw_chartjs()
{
	html_resumen = null;
	htmlresum = null;
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	elements.chart_topbalance4.clearChart();
	elements.chart_topbalance4.drawChart();


	var i;
	var HTML = '<html><body>'
	var dfech = forms[frm].DesdeFecha;
	if(!dfech) dfech = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	var hfech = forms[frm].HastaFecha;
	if(!hfech) hfech = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	

	var maxReturedRows = 15;
		
	var query =  "select cli.DescCliente, ISNULL(SUM(oi.impbie_cfa),0)+ISNULL(SUM(oi.impbie2_cfa),0)+ISNULL(SUM(oi.impbie3_cfa),0) "+// ISNULL(SUM(oi.impnee_cfa),0) 
	"from [tbFacturaCabecera] oi LEFT JOIN "+
	"[tbMaestroClientes] cli ON oi.clie_cfa = cli.IdCliente "+
	"where fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
	"' group by cli.IdCliente,cli.DescCliente order by 2 desc";
	
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
	var maxRows = ds.getMaxRowIndex()
	if(maxRows == 0)
	{
		totalsum = 0;
	}
	else
	{
		var ds_totalarray = ds.getColumnAsArray(2);
		var totalsum = ds_totalarray.reduce( function(total, amount) {
			 return total + amount
		});
		if(!totalsum) totalsum = 0;
	}
	
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
		HTML += '<tr bgcolor="#cccccc"><td colspan=2 class="body"><b>Top 15 Clientes ('+
		utils.dateFormat(dfech,'dd/MM/yyyy')+' - '+utils.dateFormat(hfech,'dd/MM/yyyy')+')</b></td></tr>'

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
		

		for( i = 1 ; i <= maxRows ; i++ )
		{
			ds.rowIndex = i;
			if(ds[1] != null && ds[2] != null && ds[2] != 0)
			{
				if(totalsum && totalsum != 0) {
					var comprascli = ds[2];
					var percentage = (comprascli / totalsum) * 100;		
					percentage = globals.GCROUND(percentage,2);
					percentage = utils.numberFormat(percentage, '###,###,##0.00');
				}
				else percentage = null;
				HTML += '<tr><td nowrap class="body">'+ utils.stringLeft(ds[1],40)
				if(!percentage) HTML += "</td><td nowrap align='right' class='body'><b>"+ utils.numberFormat(ds[2], '###,###,##0.00 €')+"</b></td></tr>";
				else HTML += "</td><td nowrap align='right' class='body'><b>"+ "("+percentage+"%) "+ utils.numberFormat(ds[2], '###,###,##0.00 €')+"</b></td></tr>";
				
				data.data.labels.push(utils.stringLeft(ds[1],40));
				datadatasets.data.push(ds[2]);
				datadatasets.backgroundColor.push(Colores[i-1]);
			}
			if(i==maxRows) {
				data.data.datasets.push(datadatasets)
			}
		}
		elements.chart_topbalance4.setData(data);
		elements.chart_topbalance4.setOptions(options);
		
		//put total line at bottom
		/** @type String */
		var totalLine = ds.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total Ventas: '+
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
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3EFFEB4A-4CAE-4EC9-B638-E2D6F8B7E055"}
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
 *
 *
 *
 * @properties={typeid:24,uuid:"B7328DD5-A3A6-4684-BE96-67F4CF35B9B6"}
 */
function onShow(firstShow, event) {
	elements.chart_topbalance4.clearChart()
	chartjstype = 'pie';
	draw_chartjs()
	
}
