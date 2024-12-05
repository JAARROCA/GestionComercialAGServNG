/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5D7A240A-C854-4C5C-936E-8DBCB63CDF8F"}
 */
var html_sales = '';

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"A0436DED-8091-44B5-802A-2E056F226963",variableType:8}
 */
var useEastwood = 0;

/**
 * @type {Array<String>}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"4294F4C7-0E6A-4B31-80D6-2D77FE88E027",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC'];

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"AEFC5436-359F-4E8C-8B22-01E23835B589"}
 */
var html = '';

/**
 * @properties={typeid:24,uuid:"A361480B-8EDD-437D-AE56-ADFEE9345DED"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	var i;
	var HTML = '<html><body>'
	var year = forms.FrmNotasGC.fecha_cfa.getFullYear()

	var maxReturedRows = 5;
	var query = "select cli.DescCliente, SUM(oi.impnee_cfa) "+
				"from [tbNotaCabecera] oi LEFT JOIN "+
				"[tbMaestroClientes] cli ON oi.clie_cfa = cli.IdCliente "+
				"where year(fecha_cfa) = "+year+
				"group by cli.DescCliente order by 2 desc";
				
	//clear pieChart
	/*for(i =1 ; i<=5 ; i++)
	{
		if(elements['chart_pie'] != null)
		{
			//var vMyColor = Packages.com.servoy.j2db.util.PersistHelper.createColor(Colores[i-1])
			//elements.chart_pie.setColors(i-1,vMyColor)
			elements.chart_pie.setLegends(i-1,"")// set legends of chart
			elements.chart_pie.setValues(i-1, 0, 0)		
			
		}
	}*/
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
	var maxRows = dataset.getMaxRowIndex()

	if(maxRows == 0)
	{
		//nothing sold to this customer
		HTML += '<div align="center"><b class="largeRed">No hay notas.</b></div>';  //</html>
		html_sales = HTML
		//elements.chart_pie.visible = false;
	}
	else
	{
//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff">\n'
		HTML += '<tr bgcolor="#cccccc"><td colspan=2 class="body"><b>Top 5 Clientes ('+year+')</b></td></tr>'

		//elements.chart_pie.visible = true;

		for( i = 1 ; i <= maxRows ; i++ )
		{
			dataset.rowIndex = i;
			if(dataset[1] != null && dataset[2] != null)
			{
				/*if(elements['chart_pie'] != null)
				{
					var cli  = utils.stringLeft(dataset[1],40)
					elements.chart_pie.setLegends(i-1,cli)// set legends of chart
					elements.chart_pie.setValues(i-1, 0, dataset[2])
					elements.chart_pie.setFont(new java.awt.Font('Verdana','0','12'))
				}*/
				HTML += "<tr><td nowrap class='body'>"+ utils.stringLeft(dataset[1],40)+
				"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(dataset[2], '###,###,##0.00 €')+"</td></tr>";
			}
		}
		
		var myPie = plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(dataset),true, 1);
		//var server = plugins.VelocityReport.getServerURL()
		//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
		html = '<html><body>'+myPie+'</html></body>';

		//put total line at bottom
		/** @type String */
		var totalLine = dataset.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
		HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total: '+
		utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";

		HTML += '</table>\n'+'</body>\n' //+'</html>'

		html_sales = HTML
	}
}

/**
 * 
 * TODO generated, please specify type and doc for the params
 * @param dataset
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"A9D8BED8-4412-40D3-B353-18754A780587"}
 */
function getPieChartDef(dataset) {
	var year = forms.FrmNotasGC.fecha_cfa.getFullYear()
	var vquery = "select cli.DescCliente, SUM(oi.impnee_cfa) "+
				"from [tbNotaCabecera] oi LEFT JOIN "+
				"[tbMaestroClientes] cli ON oi.clie_cfa = cli.IdCliente "+
				"where year(fecha_cfa) = "+year+
				" group by cli.DescCliente order by 2 desc";
    var result = databaseManager.getDataSetByQuery(globals.GCconex,vquery,null,-1)
    var chartDef = {};
    chartDef.title = "Top 5 Clientes ("+year+")";
    chartDef.threeD = true;
    chartDef.shadow = true;
    chartDef.proportional = true;
    chartDef.labelFontSize = 9;
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
        var text = utils.stringLeft(dataset.getValue(i,1),20);
        var color = Colores[i-1];        
        if(percent > 0) var porc = (percent * 100)/totalLine;
        else porc = 0;
        var slice = { percent: percent, label: utils.numberFormat(porc,'###,###,##0.00')+'%', legend: text , color: color };
        chartDef.slices.push(slice);
    }
    chartDef.orientation = 45;
    //etc.
    return chartDef;
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E0D7F7F7-1B3A-46DD-9BD2-115C3D3F8C4D"}
 */
function onResize(event) {
	// TODO Auto-generated method stub
	draw_chart()
	
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"E1553CB6-1A80-4CCB-B2EF-A6A2808910D4"}
 */
function draw_chart2()
{
	if(forms.FrmNotasGC.foundset.getSize() > 0)
	{
		var i;
		var HTML = '<html><body>'
		
		var maxReturedRows = 5;
		var query = "select MONTH(oi.fecha_cfa), SUM(oi.impnee_cfa),YEAR(oi.fecha_cfa) "+
					"from [tbNotaCabecera] oi "+
					"group by MONTH(oi.fecha_cfa),YEAR(oi.fecha_cfa) "+
					"order by YEAR(oi.fecha_cfa) desc,MONTH(oi.fecha_cfa) desc";
					
		//clear pieChart
		/*for(i =1 ; i<=5 ; i++)
		{
			if(elements['chart_pie'] != null)
			{
				//var vMyColor = Packages.com.servoy.j2db.util.PersistHelper.createColor(Colores[i-1])
				//elements.chart_pie.setColors(i-1,vMyColor)
				elements.chart_pie.setLegends(i-1,"")// set legends of chart
				elements.chart_pie.setValues(i-1, 0, 0)		
				
			}
		}*/
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
		var maxRows = dataset.getMaxRowIndex()
	
		if(maxRows == 0)
		{
			//nothing sold to this customer
			HTML += "<div align='center'><b class='largeRed'>No hay notas.</b></div>";  //</html>
			html_sales = HTML
			//elements.chart_pie.visible = false;
		}
		else
		{
			var year = forms.FrmNotasGC.fecha_cfa.getFullYear()
	//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
			HTML += "<table width='100%' border='0' cellpadding='1' bgcolor='#ffffff'>"
			HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>Notas últimos 5 meses "+year+"</b></td></tr>"
			
			//elements.chart_pie.visible = true;
	
			for( i = maxRows ; i >= 1 ; i-- )
			{
				dataset.rowIndex = i;
				if(dataset[1] != null && dataset[2] != null)
				{
					/*if(elements['chart_pie'] != null)
					{
						elements.chart_pie.setLegends(i-1,dataset[1])// set legends of chart
						elements.chart_pie.setValues(i-1, 0, dataset[2])
					}*/
					HTML += "<tr><td nowrap class='body'>"+ getNomMes(dataset[1])+" "+utils.numberFormat(dataset[3],'0000')+
					"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(dataset[2], '###,###,##0.00 €')+"</td></tr>";
				}
			}
	
			var myPie = plugins.VelocityReport.getChart(CHART.BAR, getBarChartDef(dataset),true, 1);
			html = '<html><head></head><body>'+myPie+'</body></html>';
			
			//put total line at bottom
			/** @type String */
			var totalLine = dataset.getColumnAsArray(2)
			totalLine = totalLine.join('+')
			totalLine = eval(totalLine);
			HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
	
			HTML += "</table>"+"</body>" +'</html>'
	
			html_sales = HTML
		}
		
	}
}

/**
 * Construct a Bar Chart definition object
 * 
 * @returns (Object) the chartDefinition
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param dataset
 *
 * @properties={typeid:24,uuid:"680D54DC-3F07-4848-AB09-6FCD8D928064"}
 */
function getBarChartDef(dataset) {
	var year = forms.FrmNotasGC.fecha_cfa.getFullYear()
	// regular stuff:
	var chartDef = {};
	chartDef.titleColor = "#222222";
	//chartDef.titleSize = 20;
	chartDef.background = {type: 'gradient', angle: 90, colors: [['#CCCCCC', 0], ['#FFFFFF', 100]]};
	chartDef.width = elements.html.getWidth() - 10/*360*/;
	chartDef.height = elements.html.getHeight() - 10;
	chartDef.areaFill = {type: 'gradient', angle: 0, colors: [['#CCCCCC', 0], ['#FFFFFF', 100]]};
	chartDef.legendPosition = "right";
	chartDef.legendMargins = {horizontal: 10, vertical: 2};
	chartDef.margins = {top: 10, left: 10, right: 10, bottom: 10};
	chartDef.grid = {xAxisStepSize: 10, yAxisStepSize: 10, lengthOfLineSegment: 3, lengthOfBlankSegment:2, xOffset: 5, yOffset: 5};
	chartDef.title = "Notas últimos 5 meses "+year;
	chartDef.threeD = true;
	chartDef.horizontal = false;
	chartDef.barWidth = 45;
	chartDef.shadow = false;
	chartDef.spaceBetweenGroupsOfBars = 15;
	chartDef.spaceWithinGroupsOfBars = 5;
	chartDef.transparency = 100;
	chartDef.rangeMarkers = {orientation: 'h', color: '#00CCFF55', startPoint: 40, endPoint: 60};
	
	if (!useEastwood) {
		chartDef.markers = [{shape: 'arrow', size: 10, color: '#FF0000', x: 40, y: 50},
					{text: 'Bad year!', size: 12, x: 44, y: 66}];
	}
	// here starts the interesting thing:
	
	// set as stacked:
	chartDef.stacked = false;

	// set the values:
//	var data1 = {data: [45,32,22], colors: ['#BB5555', '#DD3333', '#FF0000'], legend: 'Servoy'};
//	var data2 = {data: [58,24,76], color: ['#00FFFF', '#FFFF00', '#00FF00'], legend: 'Stuff'};
//	var data3 = {data: [77,100,55], color: ['#5555BB', '#3333DD', '#0000FF'], legend: 'Rules!'};
//	chartDef.bars = [data1, data2, data3];
	
	var maxRows = dataset.getMaxRowIndex()
	/** @type String */
	var totalLine = dataset.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
	var ar = new Array();
	var ar2 = new Array();
	var ar3 = new Array();
	  for(var i=maxRows; i >= 1; i--) 
	 {	
	    	 var percent = dataset.getValue(i,2);
	         var text = getNomMes(dataset.getValue(i,1));
	         var color = Colores[i-1];        
	         if(percent > 0) var porc = (percent * 100)/totalLine;
	         else porc = 0;
	         var data1 = {data: [percent], colors: [color], legend: text, markers: [{text: porc+'%'}]};
		
	         ar.push(data1);
	         ar2.push(getNomMes(dataset.getValue(i,1)));
	         ar3.push(percent)
	  }
	  
		 
	  
	//chartDef.bars = [data1, data2, data3];
	  chartDef.bars = ar;

	// the sum of each bars by series will give (45+58+77=180, 32+24+100=156, 22+76+55=153)
	// we give the chart a max value of 200 to let it breathe ;)
	chartDef.maxValue = Math.max.apply(null, ar3)//dataset.getValue(1,2) + 500;/*200;*/
	var s = globals.GCROUND(chartDef.maxValue / 11, 0)
	var sig=s;
	var ar4 = new Array()
	//ar4.push(0)
	for(i=1;i<=11;i++)
	{
		ar4.push(sig)
		sig+=s;
	}
	// a simple x axis with 3 values (note the scaling):
	chartDef.xAxis = {
	        title: {text: "", size: 15, color: "#FFFFFF"},
			labels: ar2,//['2008', '2009', '2010'],
			positions: [5, 15, 25, 35, 45],
			style: {textColor: '#FF0000', fontSize: 14, alignment: 'center', drawTickMarks: false},
			minRange: 0, maxRange: 50
		};
	
	// and the y axis: the positions are scaled in a range of 0-100 anyway, so you can use [0,10...] or [0,20...] indiferently:
	chartDef.yAxis = {
	        title: {text: "", size: 15, color: "#000000"},
			labels: ar4/*['0','20', '40', '60', '80', '100', '120', '140', '160', '180', '200']*/,
			positions: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
			style: {textColor: '#000000', fontSize: 12, alignment: 'right', tickMarkLength: 12, tickMarkColor: '#FF0022'},
			minRange: 0, maxRange: 100
		};
	
	return chartDef;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} M
 *
 * @return {String}
 * @properties={typeid:24,uuid:"B78ADA33-8186-4828-9ADD-C9939C0D9835"}
 */
function getNomMes(M){
	switch( M )
	{
		case 1: 
		{
			return 'Enero';
			
		}
		case 2: 
		{
			return 'Febrero';
			
		}
		case 3: 
		{
			return 'Marzo';
			
		}
		case 4: 
		{
			return 'Abril';
			
		}
		case 5: 
		{
			return 'Mayo';
			
		}
		case 6: 
		{
			return 'Junio';
			
		}
		case 7: 
		{
			return 'Julio';
			
		}
		case 8: 
		{
			return'Agosto';
			
		}
		case 9: 
		{
			return 'Septiembre';
			
		}
		case 10: 
		{
			return 'Octubre';
			
		}
		case 11: 
		{
			return 'Noviembre';
			
		}
		case 12: 
		{
			return 'Diciembre';
			
		}
		default: 
		{
			return null
		}		
	}
}
