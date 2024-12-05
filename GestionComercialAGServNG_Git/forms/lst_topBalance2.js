/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"024599E8-77C8-4FC3-B1E5-16D1DF2986DC"}
 */
var html_resumen = null;

/**
 * @type {Array<String>}
 *
 *
 *
 * @properties={typeid:35,uuid:"35F4E993-B610-444A-A313-E4B06D618C4C",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"61E1D2F9-1F24-4E1A-8FAF-95BF6CDA2E07"}
 */
var htmlresum = null;

/**
 * @type {String}
 *
  *
 *
 * @properties={typeid:35,uuid:"B6C6E54C-6805-492D-8581-C56ADD560B3B"}
 */
var chartjstype = 'pie';

/**
 * @return {String}
 * @properties={typeid:24,uuid:"67737C2C-99EE-4696-A111-865D04E868EB"}
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
		
	var query = "select pro.descproveedor, ISNULL(SUM(oi.impbie1_cfca),0)+ISNULL(SUM(oi.impbie2_cfca),0)+ISNULL(SUM(oi.impbie3_cfca),0) "+// ISNULL(SUM(oi.impnee_cfca),0) 
	"from [tbFacturaCompraCabecera] oi LEFT JOIN "+
	"[tbMaestroProveedores] pro ON oi.pro_cfca = pro.codpro "+
	"where fecha_cfca between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
	"' group by pro.codpro,pro.DescProveedor order by 2 desc";
	
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
	//var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999999);
	var maxRows = dataset.getMaxRowIndex()
	//var maxRows2 = dataset2.getMaxRowIndex()

	if(maxRows == 0)
	{
		//nothing sold to this customer
		HTML += '<div align="left"><b style="color:red;" class="largeRed">NO HAY FACTURAS DE COMPRAS EN EL PERIODO INTRODUCIDO</b></div>';  //</html>
		html_resumen = HTML
		htmlresum = null
		
	}
	else
	{
//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += '<table border=0 cellpadding="1"  bgcolor="#ffffff" width="100%">\n'
		HTML += '<tr bgcolor="#cccccc"><td colspan=2 class="body"><b>Top 15 Compras ('+
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
		htmlresum = '<html><body>'+myPie+'</html></body>';
		
		//put total line at bottom
		/** @type String */
		var totalLine = dataset.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total Compras: '+
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
 * @properties={typeid:24,uuid:"570AD517-2193-47DD-B6A5-9E7B7120539A"}
 */
function draw_chartjs()
{
	html_resumen = null;
	htmlresum = null;
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	elements.chart_topbalance2.clearChart();
	elements.chart_topbalance2.drawChart()

	var i;
	var HTML = '<html><body>'
	var dfech = forms[frm].DesdeFecha;
	if(!dfech) dfech = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	var hfech = forms[frm].HastaFecha;
	if(!hfech) hfech = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	

	var maxReturedRows = 15;
		
	var query = "select pro.descproveedor, ISNULL(SUM(oi.impbie1_cfca),0)+ISNULL(SUM(oi.impbie2_cfca),0)+ISNULL(SUM(oi.impbie3_cfca),0) "+// ISNULL(SUM(oi.impnee_cfca),0) 
	"from [tbFacturaCompraCabecera] oi LEFT JOIN "+
	"[tbMaestroProveedores] pro ON oi.pro_cfca = pro.codpro "+
	"where fecha_cfca between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
	"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+
	"' group by pro.codpro,pro.DescProveedor order by 2 desc";
	
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
		HTML += '<div align="left"><b style="color:red;" class="largeRed">NO HAY FACTURAS DE COMPRAS EN EL PERIODO INTRODUCIDO</b></div>';  //</html>
		html_resumen = HTML
		htmlresum = null
		
	}
	else
	{
//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += '<table border=0 cellpadding="1"  bgcolor="#ffffff" width="100%">\n'
		HTML += '<tr bgcolor="#cccccc"><td colspan=2 class="body"><b>Top 15 Compras ('+
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
		elements.chart_topbalance2.setData(data);
		elements.chart_topbalance2.setOptions(options);
		
		
		//put total line at bottom
		//** @type String */
		//var totalLine = ds.getColumnAsArray(2)
		//totalLine = totalLine.join('+')
		//totalLine = eval(totalLine);
		//HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total Compras: '+
		//utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total Compras: '+
		utils.numberFormat(totalsum, '###,###,##0.00 €') + "</b></td></tr>";
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
 * @properties={typeid:24,uuid:"0503C9C0-28B4-487C-84FE-19C455749D7F"}
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
 * @properties={typeid:24,uuid:"E2D26604-50C7-4A23-9905-BD476347C097"}
 */
function onShow(firstShow, event) {
	elements.chart_topbalance2.clearChart()
	chartjstype = 'pie';
	draw_chartjs()
	
}
