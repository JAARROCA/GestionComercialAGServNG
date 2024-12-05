/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C3024F1-F84A-40BC-AC9F-4AC476F0CC57"}
 */
var html_sales = '';

/**
 * @type {Array<String>}
 *
 *
 * @properties={typeid:35,uuid:"F568AB01-BE7B-42AE-982A-B158350AE72C",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC'];

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD9AF000-3B03-4BD9-9592-06FD4F6BDCE7"}
 */
var html = '';

/**
 * @properties={typeid:24,uuid:"E0EAB020-AE6F-42EA-9149-288F5F32EBD6"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		var i;
		var HTML = "<html><body>"
		var year = forms.FrmFacturasGC.fecha_cfa.getFullYear()
	
		var query = "select ISNULL(SUM(oi.impnee_cfa),0) "+
					"from [tbFacturaCabecera] oi where year(fecha_cfa) = "+year;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
		var ventas = dataset.getValue(1,1)		
		
		query = "select ISNULL(SUM(oi.impnee_cfca),0) "+
					"from [tbFacturaCompraCabecera] oi where year(fecha_cfca) = "+year;
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
		var compras = dataset.getValue(1,1)	
		
		//clear pieChart
		for(i =1 ; i<=2 ; i++)
		{
			if(elements['chart_pie'] != null)
			{
				//var vMyColor = Packages.com.servoy.j2db.util.PersistHelper.createColor(Colores[i-1])
				//elements.chart_pie.setColors(i-1,vMyColor)
				elements.chart_pie.setLegends(i-1,"")// set legends of chart
				elements.chart_pie.setValues(i-1, 0, 0)		
				
			}
		}
		
	
		if(ventas == 0 && compras == 0)
		{
			//nothing sold to this customer
			HTML += '<div align="center"><b class="largeRed">No hay facturas ni de ventas ni compras en el año '+year+'.</b></div>';  //</html>
			html_sales = HTML
			elements.chart_pie.visible = false;
		}
		else
		{
	//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
			HTML += "<table width='100%' border='0' cellpadding='1' bgcolor='#ffffff'>"
			HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>VENTAS - COMPRAS ("+year+")</b></td></tr>"
	
			elements.chart_pie.visible = true;
	
			//if(elements['chart_pie'] != null)
			//{
				elements.chart_pie.setLegends(0,'VENTAS')// set legends of chart
				elements.chart_pie.setValues(0, 0, ventas)
			//}
			//if(elements['chart_pie'] != null)
			//{
				elements.chart_pie.setLegends(1,'COMPRAS')// set legends of chart
				elements.chart_pie.setValues(1, 0, compras)
			//}
			HTML += "<tr><td nowrap class='body'>VENTAS"+
			"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(ventas, '###,###,##0.00 €')+'</td></tr>';
			HTML += "<tr><td nowrap class='body'>COMPRAS"+
			"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(compras, '###,###,##0.00 €')+'</td></tr>';
			
			
	
			var myPie = plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(ventas, compras),true, 1);
			html = "<html><body>"+myPie+"</html></body>";
			
			//put total line at bottom
			/** @type String */
			var totalLine = ventas-compras;
			HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
	
			HTML += "</table>"+"</body>" +"</html>"
	
			html_sales = HTML
		}
	}
}

/**
 * 
 * @param {Number} V
 * @param {Number} C
 * @return {Object}
 * @properties={typeid:24,uuid:"4CF974D0-5C4C-420A-BC7D-5021A0C9EF86"}
 * @SuppressWarnings(unused)
 */
function getPieChartDef(V,C) {
	var year = forms.FrmFacturasGC.fecha_cfa.getFullYear()
	var vquery = "select SUM(oi.impnee_cfa) "+
				 "from [tbFacturaCabecera] oi where year(fecha_cfa) = "+year;
    var result = databaseManager.getDataSetByQuery(globals.GCconex,vquery,null,1)
    var chartDef = {};
    chartDef.title = "VENTAS - COMPRAS ("+year+")";
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
   /** @type String */
	var totalLine = V - C;
		
		
    
        result.rowIndex = 1;
        var percent = V;
        var text = 'VENTAS';
        var color = Colores[1-1];        
        if(percent > 0) var porc = (percent * 100)/totalLine;
        else porc = 0;
        var slice = { percent: percent, label: utils.numberFormat(percent,'###,###,##0.00')+'€', legend: text , color: color };
        chartDef.slices.push(slice);
        
        result.rowIndex = 2;
        percent = C;
        text = 'COMPRAS';
        color = Colores[3-1];        
        if(percent > 0) porc = (percent * 100)/totalLine;
        else porc = 0;
        slice = { percent: percent, label: utils.numberFormat(percent,'###,###,##0.00')+'€', legend: text , color: color };
        chartDef.slices.push(slice);
        
        
    chartDef.orientation = 45;
    //etc.
    return chartDef;
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7AC64DA-3F23-44AD-B438-69FC366E92F2"}
 */
function onResize(event) {
	// TODO Auto-generated method stub
	draw_chart()
}
