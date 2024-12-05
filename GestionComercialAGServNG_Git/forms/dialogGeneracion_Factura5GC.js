/**
 * @properties={typeid:24,uuid:"B6008FBA-EA9D-47FA-825E-DC2D53D70319"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	//if(globals.GCokToCommit == 1)
	//{
	//	if(globals.GCisEditing()) globals.GCcancelEditing()
	//}
	application.getWindow('Generacion Factura').hide();
	globals.GCenableBgElements();
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"7C5CD77A-9762-4CFB-B743-903D73418024"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var cli = forms.dlg_Generacion_Factura5GC.CLI;
	var tip = forms.dlg_Generacion_Factura5GC.TipoFra;
	/*if(lalbaranpendfacturar)
	{
		var size = lalbaranpendfacturar.getSize()
		
		for(var j=1;j<=size;j++)
		{
			var uuid
			lalbaranpendfacturar.sifa_lal;
		}
	}*/
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	
	databaseManager.saveData();	
	var query = 'select * from [lalbaran] where clie_lal = '+cli+' and [sifa_lal] = 1 order by nup_lal,nli_lal';
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	var rows = dataset.getMaxRowIndex()
	
	
	for(var i=1; i <= rows;i++)
	{
		var alb = dataset.getValue(i,1)
		var alblin = dataset.getValue(i,2)
		var cliente = dataset.getValue(i, 7)
		//var nomcliente = dataset.getValue(i, 4)
		var cfpa = dataset.getValue(i, 15)
		
		query = 'select refped_cal from [calbaran] where [cod_cal] = '+alb;
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var refped = dataset2.getValue(1,1)
		
		
		if(i==1)
		{
			if(tip == 0)
			{
				//cabecera
				forms.FrmFacturasGC.foundset.newRecord(true)	
				forms.FrmFacturasGC.id = application.getUUID()
				forms.FrmFacturasGC.sub_setEjercicio()
				forms.FrmFacturasGC.usu_cfa = globals.GClogin_usuario;
				forms.FrmFacturasGC.doEditser_cfa()
				forms.FrmFacturasGC.sub_setNewNumeroFacturaOrd();
				var eje = forms.FrmFacturasGC.eje_cfa;
				var ser = forms.FrmFacturasGC.ser_cfa;
				var nup = forms.FrmFacturasGC.nup_cfa;
				//var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
				var fech = utils.dateFormat(globals.GCDesdeFecha,'dd-MM-yyyy')
				forms.FrmFacturasGC.fecha_cfa = utils.parseDate(fech,'dd-MM-yyyy')
				forms.FrmFacturasGC.clie_cfa = cliente;
				forms.FrmFacturasGC.cfpa_cfa = cfpa;
				forms.FrmFacturasGC.tipofacturasii = 'F1';
				if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais &&
				forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais != 'ES')
				{
					forms.FrmFacturasGC.tipooperacionsii = 'E';
					forms.FrmFacturasGC.sujetaexentaivasii = 'E';
				}
				else if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal &&
				(utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '35' ||
				utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '38'||
				utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '51'||
				utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '52'))
				{
					forms.FrmFacturasGC.tipooperacionsii = 'E';
					forms.FrmFacturasGC.sujetaexentaivasii = 'NS';
				}
				else{
					forms.FrmFacturasGC.tipooperacionsii = 'E';
					forms.FrmFacturasGC.sujetaexentaivasii = 'NE';
				}
				if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroformpago)
				{
					//forms.FrmFacturasGC.desccfpa_cfa = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroformpago.denom_fp	
					forms.FrmFacturasGC.onDataChangeFP()
				}
				/*forms.FrmFacturasGC.repr_cfa = repr
				forms.FrmFacturasGC.piva_cfa = piva
				forms.FrmFacturasGC.pgfi_cfa = pgfi
				if(depp != 0) forms.FrmFacturasGC.depp_cfa = depp	
				forms.FrmFacturasGC.impbre_cfa = impbre
				forms.FrmFacturasGC.impbie_cfa = impbie
				forms.FrmFacturasGC.cuotaiva_cfa = impcie
				forms.FrmFacturasGC.impnee_cfa = impnee
				*/
				var uuid = forms.FrmFacturasGC.id
				databaseManager.saveData()
				
				
				//actualizo el valor del última factura en los parametros
				forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords();
				var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
				var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize()) return;
					forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
					result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
				}
				
				forms.dlg_ParametroAplicacionGC.foundset.numfactura = nup;
				
				databaseManager.saveData(forms.dlg_ParametroAplicacionGC.foundset)
			}
			else
			{
				//cabecera proforma
				forms.FrmFacturasProformaGC.foundset.newRecord(true)	
				forms.FrmFacturasProformaGC.id = application.getUUID()
				forms.FrmFacturasProformaGC.sub_setEjercicio()
				forms.FrmFacturasProformaGC.usu_cfa = globals.GClogin_usuario;
				forms.FrmFacturasProformaGC.doEditser_cfa()
				forms.FrmFacturasProformaGC.sub_setNewNumeroFacturaOrd();
				eje = forms.FrmFacturasProformaGC.eje_cfa;
				ser = forms.FrmFacturasProformaGC.ser_cfa;
				nup = forms.FrmFacturasProformaGC.nup_cfa;
				fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
				forms.FrmFacturasProformaGC.fecha_cfa = utils.parseDate(fech,'dd-MM-yyyy')
				forms.FrmFacturasProformaGC.clie_cfa = cliente;
				forms.FrmFacturasProformaGC.cfpa_cfa = cfpa;
				//forms.FrmFacturasGC.tipofacturasii = 'F1';
				//forms.FrmFacturasGC.tipooperacionsii = 'PS';
				//forms.FrmFacturasGC.sujetaexentaivasii = 'NE';
				if(forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroformpago)
				{
					//forms.FrmFacturasGC.desccfpa_cfa = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroformpago.denom_fp	
					forms.FrmFacturasProformaGC.onDataChangeFP()
				}
				/*forms.FrmFacturasGC.repr_cfa = repr
				forms.FrmFacturasGC.piva_cfa = piva
				forms.FrmFacturasGC.pgfi_cfa = pgfi
				if(depp != 0) forms.FrmFacturasGC.depp_cfa = depp	
				forms.FrmFacturasGC.impbre_cfa = impbre
				forms.FrmFacturasGC.impbie_cfa = impbie
				forms.FrmFacturasGC.cuotaiva_cfa = impcie
				forms.FrmFacturasGC.impnee_cfa = impnee
				*/
				uuid = forms.FrmFacturasProformaGC.id
				databaseManager.saveData()
				
				
				//actualizo el valor del última factura en los parametros
				forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords();
				result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
				fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize()) return;
					forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
					result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
				}
				
				forms.dlg_ParametroAplicacionGC.foundset.numfacturaproforma = nup;
				
				databaseManager.saveData(forms.dlg_ParametroAplicacionGC.foundset)
			}
		}
		
		
		
			//var linea = dataset.getValue(i, 2)
			var refm = dataset.getValue(i, 3)
			var desc = dataset.getValue(i, 4)
			var cant = dataset.getValue(i, 5)
			if(cant == null)
			{
				cant = 0
			}
			var unme = dataset.getValue(i, 6)
			var clie = dataset.getValue(i, 7)
			//rcli = dataset.getValue(i, 8)
			var prec = dataset.getValue(i, 9)
			if(prec == null)
			{
				prec = 0
			}
			var dto = dataset.getValue(i, 11)
			var piva = dataset.getValue(i, 12)
			if(piva == null)
			{
				piva = 0
			}		
			var precuni = dataset.getValue(i, 18)
			if(precuni == null)
			{
				precuni = 0
			}
			var impor = dataset.getValue(i, 19)
			if(impor == null)
			{
				impor = 0
			}
			var importot = dataset.getValue(i, 20)
			if(importot == null)
			{
				importot = 0
			}
			//var impdto = dataset.getValue(i, 22)
			
			if(tip == 0)
			{
				//lineas
				forms.dlg_Linea_FacturaGC.foundset.newRecord(true)
				forms.dlg_Linea_FacturaGC.eje_lfa = eje;
				forms.dlg_Linea_FacturaGC.ser_lfa = ser;
				forms.dlg_Linea_FacturaGC.nup_lfa = nup;
				forms.dlg_Linea_FacturaGC.validate_autoEnter();
				//forms.dlg_Linea_FacturaGC.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
				forms.dlg_Linea_FacturaGC.nalb_lfa = alb;
				forms.dlg_Linea_FacturaGC.lalb_lfa = alblin;
				forms.dlg_Linea_FacturaGC.ref_lfa = refm;
				forms.dlg_Linea_FacturaGC.concep_lfa = desc;
				forms.dlg_Linea_FacturaGC.cant1_lfa = cant;
				forms.dlg_Linea_FacturaGC.prec_lfa = prec;
				forms.dlg_Linea_FacturaGC.unme_lfa = unme;
				forms.dlg_Linea_FacturaGC.piva_lfa = piva;
				forms.dlg_Linea_FacturaGC.clie_lfa = clie;
				forms.dlg_Linea_FacturaGC.dto_lfa = dto;
				forms.dlg_Linea_FacturaGC.precuni_lfa = precuni;
				forms.dlg_Linea_FacturaGC.onDataChange()
				
				databaseManager.saveData()	
			}
			else
			{
				//lineas
				forms.dlg_Linea_FacturaProformaGC.foundset.newRecord(true)
				forms.dlg_Linea_FacturaProformaGC.eje_lfa = eje;
				forms.dlg_Linea_FacturaProformaGC.ser_lfa = ser;
				forms.dlg_Linea_FacturaProformaGC.nup_lfa = nup;
				forms.dlg_Linea_FacturaProformaGC.validate_autoEnter();
				//forms.dlg_Linea_FacturaGC.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
				forms.dlg_Linea_FacturaProformaGC.nalb_lfa = alb;
				forms.dlg_Linea_FacturaProformaGC.lalb_lfa = alblin;
				forms.dlg_Linea_FacturaProformaGC.ref_lfa = refm;
				forms.dlg_Linea_FacturaProformaGC.concep_lfa = desc;
				forms.dlg_Linea_FacturaProformaGC.cant1_lfa = cant;
				forms.dlg_Linea_FacturaProformaGC.prec_lfa = prec;
				forms.dlg_Linea_FacturaProformaGC.unme_lfa = unme;
				forms.dlg_Linea_FacturaProformaGC.piva_lfa = piva;
				forms.dlg_Linea_FacturaProformaGC.clie_lfa = clie;
				forms.dlg_Linea_FacturaProformaGC.dto_lfa = dto;
				forms.dlg_Linea_FacturaProformaGC.precuni_lfa = precuni;
				forms.dlg_Linea_FacturaProformaGC.onDataChange()
				
				databaseManager.saveData()
			}
			
			//actualizo presupuesto si tiene
			if(refped != null && refped != '')
			{
				query = 'select ID from cofertas where cod_cof ='+refped
				var dataset3 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var preuuid = dataset3.getValue(1,1)
				if(preuuid != null)
				{
					//actualizo situacion presupuesto
					forms.FrmPresupuestosGC.foundset.loadAllRecords()
					result = forms.FrmPresupuestosGC.foundset.selectRecord(preuuid)
					fsCount = databaseManager.getFoundSetCount(forms.FrmPresupuestosGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmPresupuestosGC.foundset.getSize()) break;
						forms.dlg_Linea_AlbaranGC.foundset.setSelectedIndex(forms.FrmPresupuestosGC.foundset.getSize());
						result = forms.FrmPresupuestosGC.foundset.selectRecord(preuuid);
					}
					forms.FrmPresupuestosGC.situ_cof = 'F';
					
					databaseManager.saveData(forms.FrmPresupuestosGC.foundset)
					/*var vSet2 = databaseManager.getFoundSet(globals.GCconex, 'cofertas')  
					  
					//load record by ID in foundset  
					vSet2.loadRecords(databaseManager.convertToDataSet([preuuid]))
					var record2 = vSet2.getRecord(vSet2.getSelectedIndex());
					record2.situ_cof = 'F';
					
					databaseManager.saveData(record2)*/
				}
			}
			//actualizo situacion linea albaran
			if(alb && alblin)
			{
				forms.dlg_Linea_AlbaranGC.foundset.loadAllRecords()
				result = forms.dlg_Linea_AlbaranGC.foundset.selectRecord(alblin,alb)
				fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_AlbaranGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_Linea_AlbaranGC.foundset.getSize()) break;
					forms.dlg_Linea_AlbaranGC.foundset.setSelectedIndex(forms.dlg_Linea_AlbaranGC.foundset.getSize());
					result = forms.dlg_Linea_AlbaranGC.foundset.selectRecord(alblin,alb);
				}
				forms.dlg_Linea_AlbaranGC.sifa_lal = 2;
				
				databaseManager.saveData(forms.dlg_Linea_AlbaranGC.foundset)
			}
			
	}
	
	if(rows > 0)
	{
		if(ser == null || ser == 'Undefined')
		{
			ser = 'IS NULL'
		}
		else
		{
			ser = "= '"+ser+"'"
		}
		if(tip == 0)
		{
			query = "select sum(impor_lfa) from tbFacturaLinea "+
			"where eje_lfa = "+ eje +" AND ser_lfa "+ser+" AND nup_lfa = "+nup;
			//var ds = controller.getDataSource().split('/');
			dataset3 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset3.getValue(1,1)
			
			
			if(imporbr==null)
			{
				imporbr=0
			}
			result = forms.FrmFacturasGC.foundset.selectRecord(forms.FrmFacturasGC.id)
			fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.FrmFacturasGC.foundset.getSize()) return;
				forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
				result = forms.FrmFacturasGC.foundset.selectRecord(forms.FrmFacturasGC.id);
			}
			forms.FrmFacturasGC.impbre_cfa = imporbr
			forms.FrmFacturasGC.impbie_cfa = null
			forms.FrmFacturasGC.impbie2_cfa = null
			forms.FrmFacturasGC.impbie3_cfa = null
			forms.FrmFacturasGC.piva_cfa = null
			forms.FrmFacturasGC.piva2_cfa = null
			forms.FrmFacturasGC.piva3_cfa = null
			forms.FrmFacturasGC.cuotaiva_cfa = null
			forms.FrmFacturasGC.cuotaiva2_cfa = null
			forms.FrmFacturasGC.cuotaiva3_cfa = null
			forms.FrmFacturasGC.impre = null
			forms.FrmFacturasGC.impre2 = null
			forms.FrmFacturasGC.impre3 = null
			forms.FrmFacturasGC.onFocusLostDtoPP(event)
			forms.FrmFacturasGC.onFocusLostgtosfinan(event)
			forms.FrmFacturasGC.onFocusLostIva(event)
			forms.FrmFacturasGC.Generacion_Efecto_Factura()
			databaseManager.saveData();
		}
		else
		{
			query = "select sum(impor_lfa) from tbFacturaProformaLinea "+
			"where eje_lfa = "+ eje +" AND ser_lfa "+ser+" AND nup_lfa = "+nup;
			//var ds = controller.getDataSource().split('/');
			dataset3 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			imporbr=dataset3.getValue(1,1)
			
			
			if(imporbr==null)
			{
				imporbr=0
			}
			result = forms.FrmFacturasProformaGC.foundset.selectRecord(forms.FrmFacturasProformaGC.id)
			fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasProformaGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.FrmFacturasProformaGC.foundset.getSize())
			{
				return;
			}
			forms.FrmFacturasProformaGC.foundset.setSelectedIndex(forms.FrmFacturasProformaGC.foundset.getSize());
			result = forms.FrmFacturasProformaGC.foundset.selectRecord(forms.FrmFacturasProformaGC.id);
			}
			forms.FrmFacturasProformaGC.impbre_cfa = imporbr
			forms.FrmFacturasProformaGC.impbie_cfa = null
			forms.FrmFacturasProformaGC.impbie2_cfa = null
			forms.FrmFacturasProformaGC.impbie3_cfa = null
			forms.FrmFacturasProformaGC.piva_cfa = null
			forms.FrmFacturasProformaGC.piva2_cfa = null
			forms.FrmFacturasProformaGC.piva3_cfa = null
			forms.FrmFacturasProformaGC.cuotaiva_cfa = null
			forms.FrmFacturasProformaGC.cuotaiva2_cfa = null
			forms.FrmFacturasProformaGC.cuotaiva3_cfa = null
			forms.FrmFacturasProformaGC.impre = null
			forms.FrmFacturasProformaGC.impre2 = null
			forms.FrmFacturasProformaGC.impre3 = null
			forms.FrmFacturasProformaGC.onFocusLostDtoPP(event)
			forms.FrmFacturasProformaGC.onFocusLostgtosfinan(event)
			forms.FrmFacturasProformaGC.onFocusLostIva(event)
			//forms.FrmFacturasProformaGC.Generacion_Efecto_Factura()
			databaseManager.saveData();
		}
	}
	
	
	
	//actualizo situacion albaran
	//forms.FrmAlbaranGC.situ_cal = 'F';
	//databaseManager.saveData();
	
	application.getWindow('Generacion Factura').hide();
	globals.GCenableBgElements();	
	//forms['FrmAlbaranGC'].controller.show()
	
	if(rows > 0)
	{
		if(tip == 0)
		{
			goFactura(uuid.toString(), event)
		}
		else
		{
			goFacturaProforma(uuid.toString(), event)
		}
	}
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54567F61-6E35-4EC9-8CA5-6E0657A29235"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"6F0B037D-1690-459E-A15B-322FDCE77157"}
 * 
 * @param {String} FRA
 * 
 * @param {JSEvent} event the event that triggered the action
 * @AllowToRunInFind
 */
function goFactura(FRA, event)
{
	//load the record based on the current id
	forms.FrmFacturasGC.foundset.loadAllRecords()
	var result = forms.FrmFacturasGC.foundset.selectRecord(FRA)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasGC.foundset.getSize())
		{
		return;
		}
	forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
	result = forms.FrmFacturasGC.foundset.selectRecord(FRA);
	}
	forms.FrmFacturasGC.onFocusLostgtosfinan(event)
	databaseManager.saveData(forms.FrmFacturasGC.foundset)
	forms.FrmFacturasGC.controller.show()
	
	forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) //articulos es 2

	//change tabs
	forms.lst_solution_navigation_facturasGC.btn_goForm(event);
}

/**
 * 
 * @param {String} FRA
 * 
 * @AllowToRunInFind
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB0292A3-596B-48B5-9B3F-6E568DE74CA1"}
 */
function goFacturaProforma(FRA, event)
{
	//load the record based on the current id
	forms.FrmFacturasProformaGC.foundset.loadAllRecords()
	var result = forms.FrmFacturasProformaGC.foundset.selectRecord(FRA)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasProformaGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasProformaGC.foundset.getSize())
		{
		return;
		}
	forms.FrmFacturasProformaGC.foundset.setSelectedIndex(forms.FrmFacturasProformaGC.foundset.getSize());
	result = forms.FrmFacturasProformaGC.foundset.selectRecord(FRA);
	}
	forms.FrmFacturasProformaGC.onFocusLostgtosfinan(event)
	databaseManager.saveData(forms.FrmFacturasProformaGC.foundset)
	forms.FrmFacturasProformaGC.controller.show()
	
	forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) //articulos es 2
	//change tabs
	forms.lst_solution_navigation_facturasGC.btn_goForm(event);
	forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(7) 
	//change tabs
	forms.lst_solution_navigation_facturasGC.btn_goForm(event);
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
*
 *
 *
 *
 * @properties={typeid:24,uuid:"670CAA74-CD79-4D8C-8027-4E9EF52AB8F8"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Generacion Factura').hide();
	globals.GCenableBgElements();	
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"1B1B196E-E04F-4877-B991-319947753C88"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
