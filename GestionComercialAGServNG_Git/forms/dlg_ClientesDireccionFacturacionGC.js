/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4AD4EC15-7015-4187-A772-474C0C277023"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"2EDD0B4A-4180-418F-BA1F-0347FC1AB26C"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5ECC0863-1729-4220-BCF4-4E8EC6EBBCF7"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.razonsocial.requestFocus()
	elements.razonsocial.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85D8D9BC-E50C-4F98-9733-09089E07A214"}
 */
function onActionrazonsocial(event) {
	// TODO Auto-generated method stub
	elements.direccionfiscal.requestFocus()
	elements.direccionfiscal.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D35C594F-9286-4EBA-AE0B-599FE0CF56A0"}
 */
function onActiondireccionfiscal(event) {
	// TODO Auto-generated method stub
	elements.poblacion.requestFocus()
	elements.poblacion.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D70806EB-ECA2-40AE-B9D8-EF1858468536"}
 */
function onActionpoblacion(event) {
	// TODO Auto-generated method stub
	elements.codpostal.requestFocus()
	elements.codpostal.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EDE17CD2-2299-42D7-9D83-86A3AFCB177A"}
 */
function onActionprovincia(event) {
	// TODO Auto-generated method stub
	elements.pais.requestFocus()
	elements.pais.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CF34C45F-9492-4553-BE17-E335E273CA12"}
 */
function onActionpais(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"735FF239-14BC-4775-B7C6-F6DAFBDD46F7"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.provincia.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"87122ECC-9E97-407F-AE94-00FDBC9731BC"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccionfiscal)
	{
		var dir = utils.stringReplace(direccionfiscal,' ','+')
		var pob = utils.stringReplace(poblacion,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"9CF1CD43-7AD4-44FD-8E0B-70F407AF0616"}
 */
function onDataChangeCP() {
	if(codpostal)
	{
		if(codpostal.length == 5)
		{
			var prov = utils.stringLeft(codpostal,2)			
			switch( prov )
			{
				case '01': 
				{
					provincia = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + codpostal + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) poblacion = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF0C8F1A-9292-4787-8426-900EDA45BC43"}
 */
function btn_comprcifdni(event) {
	var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
	vSet.loadAllRecords()
	vSet.deleteAllRecords()
	var n5 = null;
	if(cif)
	{
		var z=0;
		//var n = globals.validateCIFGC(cifcli) 
		//if(n == false) application.output(idcli+' '+desccli)
		var n = globals.GCcheckCIF(cif)
		//var n2 = globals.GCcheckNIF(cifcli)
		var n3 = globals.GCcheckNSS(cif)
		var cli = forms.dlg_ClientesDireccionFacturacionGC.idcliente;
		if(!cli) cli = 0;
		var query = "select pais from tbmaestroclientes where idcliente = "+cli;
		if(globals.GCconex == null) var con = 'conexiongestioncomercialag'
		else con = globals.GCconex
		var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
		var countrycli = dataset.getValue(1,1);
		if(countrycli)
		{
			var url = new String();
			if(utils.stringLeft(cif,2) == countrycli) 
			{
				var cifcl = utils.stringReplace(cif,countrycli,'');
				cifcl = utils.stringTrim(cifcl);
				cifcl = utils.stringReplace(cifcl,' ','');
				url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+countrycli+'/vat/'+cifcl;
				var pageData = plugins.http.getPageData(url);
				pageData = utils.stringReplace(pageData,'\n','')
				n5 = utils.stringLeft(pageData,20);
			}
			else
			{
				url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+countrycli+'/vat/'+forms.dlg_ClientesDireccionFacturacionGC.cif;
				pageData = plugins.http.getPageData(url);
				pageData = utils.stringReplace(pageData,'\n','')
				n5 = utils.stringLeft(pageData,20);
			}
		}
		if(n == false && n3 == false && n5 != '{  "isValid" : true,') 
		{
			z+=1;
			application.output(idcliente+' '+razonsocial/*gctbmaestroclientesdirecfacturacion_to_tbmaestroclientes.desccliente*/+ ' '+cif)
			  
			//load record by ID in foundset  
			//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
			vSet.newRecord();
			vSet.id = application.getUUID();
			vSet.idcli = idcliente;
			vSet.descli = razonsocial;//gctbmaestroclientesdirecfacturacion_to_tbmaestroclientes.desccliente;
			vSet.cifcli = cif;
			
			
			databaseManager.saveData(vSet);					
								
		}	
		if(z>0)
		{
			globals.btn_runJasperReportciferroneos()
		}
		else
		{
			globals.GCshowInfoDialog('El CIF/DNI es correcto.',null,'Aceptar',null,null,null)
		}
	}
}
