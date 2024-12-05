/**
 * @properties={typeid:24,uuid:"28804E5E-FBB6-45DC-B21A-E2EF0EEFF785"}
 */
function btn_save() {
	
	var ok = true;
	//if(cif) ok = globals.validateCIFGC(cif)
	if(!idcliente)
	{
		globals.GCshowErrorDialog('Falta introducir el código de la delegación.',null,'Aceptar',null,null,null)
	}
	if(!desccliente)
	{
		globals.GCshowErrorDialog('Falta introducir el nombre de la delegación.',null,'Aceptar',null,null,null)
	}
	else if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [IdCliente] from [tbMaestroDelegacion] where  [IdCliente] = " + idcliente;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmDelegacionesGC.foco()';
				globals.GCshowErrorDialog('Código de Delegación duplicado!',methd,'Aceptar',null,null,null)
			}
			else
			{
				/*query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Empresa = dataset.getValue(1,1);
				var con = dataset.getValue(1,2);
				editedRecs = databaseManager.getEditedRecords( foundset)
				*/
				
				var cliid = id;
				_super.btn_save()
				var result = foundset.selectRecord(cliid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize())
					{
					return;
					}
				foundset.setSelectedIndex(foundset.getSize());
				result = foundset.selectRecord(cliid);
				}
			
				globals.GCRegistroNuevo = null
				elements.idcodigo.bgcolor = '#f0f0f0'
				elements.idcodigo.readOnly = true
				elements.idcodigo.visible = false
				elements.lblidcliente.visible = true
				elements.lbl_codrequired.visible = false
				elements.btn_sendEmail.visible = true
				elements.BtnPais.visible = false
				elements.BtnSkype.visible = true
				//do sort and hilight the newly added (edited) record
				
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
				
			}
		}
		else
		{
			
			cliid = id;
			_super.btn_save()
			result = foundset.selectRecord(cliid)
			fsCount = databaseManager.getFoundSetCount(foundset);
			while(result==false)
			{
				if(fsCount == foundset.getSize())
				{
				return;
				}
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(cliid);
			}
		
			globals.GCRegistroNuevo = null
			elements.idcodigo.bgcolor = '#f0f0f0'
			elements.idcodigo.readOnly = true
			elements.idcodigo.visible = false
			elements.lblidcliente.visible = true
			elements.lbl_codrequired.visible = false
			elements.btn_sendEmail.visible = true
			elements.BtnPais.visible = false
			elements.BtnSkype.visible = true
			//do sort and hilight the newly added (edited) record
			
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
			
		}
		
			
		
	}
}

/**
 * @properties={typeid:24,uuid:"C3D20AEC-6622-4233-8493-BFF4637F145F"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.idcodigo.bgcolor = '#f0f0f0'
	elements.idcodigo.readOnly = true
	elements.idcodigo.visible = false
	elements.lblidcliente.visible = true
	elements.lbl_codrequired.visible = false
	elements.btn_sendEmail.visible = true
	elements.BtnPais.visible = false
	elements.BtnSkype.visible = true
	
}

/**
 * @properties={typeid:24,uuid:"8BF03863-1217-47D3-A718-8A544E6A58CD"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.btn_sendEmail.visible = false
	elements.BtnPais.visible = true
	elements.BtnSkype.visible = false
	elements.idcodigo.bgcolor = '#FFFF00';
	elements.fld_nombre.bgcolor = '#FFFF00';
	
}

/**
 * @properties={typeid:24,uuid:"6BDCCC89-E1B6-48F1-8DED-82923AB311CF"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"3139D6EA-A176-4BF8-A20F-BE3823F06A71"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Delegacion = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			doEdit()
		}
	}
	//setup or dim the buttons on the form based on field contents
	/*if(company_url)
	{
		elements.btn_openURL.imageURL = 'media:///sm_earth.gif';
	}
	else
	{
		elements.btn_openURL.imageURL = 'media:///nav_right_grey_whiteBg.gif';
	}

	if(company_email)
	{
		elements.btn_sendEmail.imageURL = 'media:///sm_contract_whiteBg.gif';
	}
	else
	{
		elements.btn_sendEmail.imageURL = 'media:///nav_right_grey_whiteBg.gif';
	}
	
	//see if we're on the last tab and no orders - then jump to the orders tab
	if((companies_to_orders) && elements.tabs_mainPanel.tabIndex == 4)
	{
		btn_tabOrders();
	}*/
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event the event that triggered the action 
 * @properties={typeid:24,uuid:"7233D5C3-1178-43B4-BB67-8747FC112088"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	/*var query = "SELECT [ID] FROM [cMaestroDatosFiscales] "+
				"WHERE IdEjercicio = '"+globals.Empresa+"' AND [SWIFT] IS NULL AND [CodigoBanco] IS NOT NULL";
	var ds = controller.getDataSource().split('/');
	var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 99999999999)
	var rows = dataset.getMaxRowIndex();
	for(var i=1;i<=rows;i++)
	{
		var uuid = dataset.getValue(i,1)
		forms.FrmDatosFiscales.foundset.loadAllRecords();
		var result = forms.FrmDatosFiscales.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmDatosFiscales.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmDatosFiscales.foundset.getSize())
			{
			return;
			}
			forms.FrmDatosFiscales.foundset.setSelectedIndex(forms.FrmDatosFiscales.foundset.getSize());
			result = forms.FrmDatosFiscales.foundset.selectRecord(uuid);
		}
	
		forms.FrmDatosFiscales.swift = getSWIFT(codigobanco);
		databaseManager.saveData(foundset);
	}*/
	onLoad(event)
	//make read only
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
	elements.BtnPais.visible = false
	elements.BtnSkype.visible = true
	elements.idcodigo.visible = false
	elements.lblidcliente.visible = true
	globals.GCRegistroNuevo = null
	
	
	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.btn_sendEmail.visible = true
	
	
	globals.GCenableBgElements();
	
	
	globals.GCnav_search = null
	globals.GCsetupRecordStatus();

	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50E0D136-1797-4C20-9772-F21BB51F636D"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"DE8A0958-2827-4CE4-8809-CFE54A2EC382"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Delegaciones_list();
}

/**
 * @properties={typeid:24,uuid:"3E0A6678-A1B6-4613-9E79-13F4CA08995B"}
 * @AllowToRunInFind
 */
function rpt_Delegaciones_list()
{
	if(idcliente)
	{
		globals.btn_runJasperReportListadoDelegaciones()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"23FC27E9-A0C5-4AA4-B845-AD87EF171A14"}
 */
function onActioncodigo(event) {
	// TODO Auto-generated method stub
	elements.fld_nombre.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1339782D-4504-48A1-BC7B-902D1A336CD1"}
 */
function onActionnom(event) {
	// TODO Auto-generated method stub
	elements.fld_direccion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9B414880-718A-478F-92E3-52D1934D7F4F"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_provincia.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54B0526D-0B34-457B-A8B4-89DEB4DEA9EE"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_codpostal.requestFocus()
	
}

/**
 * @properties={typeid:24,uuid:"C37159F5-9E53-4D14-A60A-F68DBD14ACAF"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	globals.GCRegistroNuevo = 1
	elements.idcodigo.bgcolor = '#feffe4'
	elements.idcodigo.readOnly = false
	elements.idcodigo.visible = true
	elements.lblidcliente.visible = false
	elements.lbl_codrequired.visible = true
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E84A484-357B-4212-95C9-FE422BEF8FFB"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B3BEC00-8A47-41D9-9112-2BA0198CC17D"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.fld_telf1.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3897E5B8-2782-459A-A179-8258235FBB90"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_email.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77665F41-DA93-4777-BD0A-72F0DFF09558"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_observaciones.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48BF0C8F-744E-4BA0-99CC-D8D7A7FEC46C"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.fld_codigopaisue.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1402A4DE-660A-475C-B642-7C7FCD8BD865"}
 */
function onActiontelf1(event) {
	// TODO Auto-generated method stub
	elements.fld_telf2.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"458597F7-9D6E-4A5E-A1AD-53EDE5DC964D"}
 */
function onActiontelf2(event) {
	// TODO Auto-generated method stub
	elements.fld_fax.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C25AD3FE-0952-4C29-8640-756607622D8B"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	elements.fld_contacto.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"866E3C28-B3F4-4623-9796-EEFA23194809"}
 */
function btn_sendEmail()
{
	if(emailcontacto) 
	{		
		var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var SMTP = dataset.getValue(1,1)
		if(!SMTP)
		{
			globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
		}
		else
		{
			query = 'select imde_us,nuser_us,passw_us from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var EmailFrom = dataset.getValue(1,1)
			var UserEmail = dataset.getValue(1,2)
			var PasswEmail = dataset.getValue(1,3)
			if(EmailFrom == null || EmailFrom == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(UserEmail == null || UserEmail == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(PasswEmail == null || PasswEmail == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else
			{
				globals.GCFormulario = 'FrmDelegacion'
				globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
			}
		}
		
	}
	// create a file object
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"82050B47-3CA1-4E68-9E38-9676E2517FC3"}
 */
function validate_beforeDelete()
{
	/*var query = "SELECT COUNT(*) FROM tbfacturacabecera WHERE clie_cfa = "+idcliente;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	query = "SELECT COUNT(*) FROM tbfacturaproformacabecera WHERE clie_cfa = "+idcliente;
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont2 = dataset.getValue(1,1)
	
	var pre = GCtbmaestroclientes_to_lofertas.getSize()
	var alb = GCtbmaestroclientes_to_lalbaran.getSize()
	var fra = GCtbmaestroclientes_to_tbfacturalinea.getSize()
	//var cont = companies_to_contacts.getSize()

	if(fra > 0 || cont > 0 || pre > 0 || alb > 0 || cont2 > 0 )
	{
		globals.GCshowErrorDialog("No se puede borrar un Cliente que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{
		return 0
	}*/
	return 0
}

/**
 * @properties={typeid:24,uuid:"4A230AF9-8915-467A-9676-CEAD80B3C746"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'D' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = idcliente;
		record.fecha = new Date();
		record.datomodif = desccliente;
		record.anterior = 'BORRADO DE LA BD';
		record.despues = 'BORRADO DE LA BD';
		record.usuario = globals.GClogin_usuario
		
		databaseManager.saveData(record)
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
		foundset.deleteRecord()
		/*}
		else
		{
			//there are orders that use this address
			var msg = 'There are orders that use this address as a shipping or billing address.' +
			' Change the orders to a new address, then you can delete this address.'
			globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5FED5325-EBD4-4624-9A4D-E9365EE4B6F8"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmDelegaciones'
	//globals.GCshowDialogPaises('Paises', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogPaises')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogPaises", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Paises';
	//win.resizable = true;
	//win.show(forms.dialog_PaisesGC)
	win.show(forms.dlgPaisesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CF92122B-82C7-4A35-ACF8-163DD3FF2468"}
 */
function onActionPais(event) {
	// TODO Auto-generated method stub
	
elements.fld_cif.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"B45D51CD-590F-4796-94D2-F864B3ED2AFE"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [IdCliente] from [tbMaestroDelegacion] where  [IdCliente] = " + idcliente;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmDelegacionesGC.foco()';
		globals.GCshowErrorDialog('Código de Delegación duplicado!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AE5D492D-377A-4374-8DF2-17E0B323B1B4"}
 */
function foco() {
	elements.idcodigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"C5DCF616-6B0F-49D1-B244-2B3ED2F12D62"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccion)
	{
		var dir = utils.stringReplace(direccion,' ','+')
		var pob = utils.stringReplace(poblacion,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
	}
}

/**
* Perform the element default action.
*
* @param {String} myString
*
* @return {String}
 *
* @properties={typeid:24,uuid:"F9AF6303-AE77-45B0-838A-31A008D19547"}
*/
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

/**
 * @properties={typeid:24,uuid:"89926D7E-28E2-4380-B233-D76DA5DFAA39"}
 * @SuppressWarnings(deprecated)
 */
function startCallUsingSkype()

{

/*

          method name : startCallUsingSkype

          usage: startCallUsingSkype(countryCode, phoneNumber

                                      , [isSkypeName])

 

          input: countryCode: text representing valid country code,

                                      prefixed by sign '+'.Ex. +91 - For India.

                      phoneNumber: integer representing the phone number to

                                           make a call.

                      isSkypeName (opt):  boolean value indicating whether

                                                   want to call a skype name. Calling to

                                                   a skype name does not require a country code.

 

          output: The script will establish a call to the specified number

                     or the specified skype name, if the third argument,

                     isSkypeName, has been passed as true, from your servoy

                     solution. The script can be used in Windows and Mac to

                     make call from your Servoy Solution.

     note:

 

          Change history:

          04/04/09             Arup Ranjan Sahoo            Created method

 *********************************************************************/

         

          var countryCode = /*arguments[0]*/pais;

          var phoneNumber = /*arguments[1]*/telf1;

          var isSkypeName = /*arguments[2] != null?arguments[2]:*/false;

         

          //Check for OS Type

          if(utils.stringMiddle(application.getOSName(),1,7) == "Windows") 
          {
                   //Windows Detected
                   //Check for Client Type
                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                      || application.getApplicationType() == 4 ) 
                   {
                	   //Make a Skype Call for Rich Client in Windows
                       //Prepare a Call String to call the Number Using Skype
                             var callString = '';
                             if(isSkypeName)
                             {
                                      callString = '/callto:' + phoneNumber;
                             } 
                             else 
                             {
                                      callString = '/callto:' + countryCode + phoneNumber;
                             }

                            

                             //Get the Path for Skype Executable

                             //Default Path is C:\Documents and Settings

                             //\Program Files\Skype\Phone\Skype.exe

                             var pathToSkype = plugins.file.getHomeDirectory().getAbsolutePath()

                             pathToSkype = pathToSkype.substring(0
                                      ,pathToSkype.indexOf("Documents and Settings"))
                                                          + "Program Files\\Skype\\Phone\\Skype.exe";
                             //Call the number Using Skype
                             application.executeProgram(pathToSkype, callString)
                   }
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Make a Skype Call for WebClient in Windows

                             //Call the number Using Skype

                             if(isSkypeName)
                             {
                                      application.showURL('skype:'
                                                + phoneNumber +'?call','_self');
                             } 
                             else 
                             {
                                      application.showURL('skype:'
                                                + countryCode + phoneNumber +'?call','_self');
                             }
                   }
          } 
          else if(utils.stringMiddle(application.getOSName(),1,3) == "Mac") 
          {
                   //Mac OS Detected
                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Make a Skype Call for Rich Client in Mac

                             //Prepare a Call String to call the Number Using Skype
                             callString = '';

                             if(isSkypeName)
                             {
                                      callString = 'skype:'
                                                + phoneNumber + '?call';
                             }
                             else 
                             {
                                      callString = 'skype:'
                                                + countryCode + phoneNumber + '?call';
                             }

                            

                             //Call the number Using Skype

                             application.executeProgram("open", callString);

                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Make a Skype Call for WebClient in Windows

                             //Call the number Using Skype

                             if(isSkypeName)
                             {
                                      application.showURL('skype:'
                                                + phoneNumber +'?call','_self');
                             } 
                             else 
                             {
                                      application.showURL('skype:'
                                                + countryCode + phoneNumber +'?call','_self');
                             }
                   }
          }
}

/**
 * @properties={typeid:24,uuid:"4A23F1E6-C709-4350-9DF9-D47E6FA165BE"}
 * @SuppressWarnings(deprecated)
 */
function startChatUsingSkype()

{

/*

          method name : startChatUsingSkype

          usage: startChatUsingSkype(skypeName)

 

          input: skypeName: text representing the Skype Name to start

                                     the Chat with.

 

          output: The script will start a chart with the Skype Name

                     passed as an argument to the method. The script

                     can be used in Windows and Mac to start the Skype Chat.

      note:

 

          Change history:

          04/04/09         Arup Ranjan Sahoo               Created method

 *******************************************************************/

         

          var skypeName = arguments[0];

         

          //Check for OS Type

          if(utils.stringMiddle(application.getOSName(),1,7) == "Windows") 
          {
                   //Windows Detected

                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Start a Skype Chat for Rich Client in Windows

                             //Prepare a chat String to chat with the Skype Name

                             var chatString = 'skype:'+ skypeName +'?chat';

                             //Start the Chat

                             application.executeProgram('rundll32'
                                      , 'url.dll,FileProtocolHandler',chatString);
                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Start a Skype Chat for WebClient in Windows                       

                             application.showURL('skype:'
                                      + skypeName +'?chat','_self');
                   }
          } 
          else if(utils.stringMiddle(application.getOSName(),1,3) == "Mac") 
          {
                   //Mac OS Detected

                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Start a Skype Chat for Rich Client in Mac

                             //Prepare a chat String to chat with the Skype Name

                             var callString = 'skype:'
                                      + skypeName + '?chat';

                            

                             //Start the Chat

                             application.executeProgram("open", callString);
                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Start a Skype Chat for Web Client in Mac

                             application.showURL('skype:'
                                      + skypeName +'?chat','_self');
                   }
          }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9DA245F1-54A0-4D50-AEFF-6A58DA501615"}
 */
function btnSkype(event) {
	// TODO Auto-generated method stub
	var popUpObj = plugins.window.createPopupMenu();
	popUpObj.addMenuItem("Llamada Skype", globals.MenuSkype, "media:///SkypeLlamadas.GIF");
	popUpObj.addMenuItem("Chat Skype", globals.MenuSkype, "media:///SkypeChat.GIF");
	popUpObj.addSeparator();
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		popUpObj.show(event.getSource(),25,0);				
	}
}

/**
 * 
 * @param {String} CC
 * 
 * @param {String} DESCCC
 *
 * @param {String} CON
 *
 * @param {String} E
 *
 *
 * @properties={typeid:24,uuid:"C081C3E7-41D4-47A1-A7D1-893394FF9FD6"}
 */
function CrearCuenta(CC,DESCCC,CON,E)
{
	var query = "select * from [ctbCuentaContable] where IdEjercicio = '"+E+
	"' and [CuentaContable] like '"+CC+"'"+"+'%'"
	var dataset = databaseManager.getDataSetByQuery(CON, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	if(rows > 1 ) var clavdesgl = 1;
	else clavdesgl = 0;
	
	var vSet2 = databaseManager.getFoundSet(CON, 'ctbcuentacontable') 
	vSet2.newRecord();
	vSet2.id = application.getUUID()
	vSet2.idejercicio = globals.Empresa;
	vSet2.cuentacontable = CC;
	vSet2.desccuentacontable = DESCCC;
	vSet2.clavedesglose = clavdesgl;
	vSet2.debeenero = 0;
	vSet2.debefebrero = 0;
	vSet2.debemarzo = 0;
	vSet2.debeabril = 0;
	vSet2.debemayo = 0;
	vSet2.debejunio = 0;
	vSet2.debejulio = 0;
	vSet2.debeagosto = 0;
	vSet2.debeseptiembre = 0;
	vSet2.debeoctubre = 0;
	vSet2.debenoviembre = 0;
	vSet2.debediciembre = 0;
	vSet2.haberenero = 0;
	vSet2.haberfebrero = 0;
	vSet2.habermarzo = 0;
	vSet2.haberabril = 0;
	vSet2.habermayo = 0;
	vSet2.haberjunio = 0;
	vSet2.haberjulio = 0;
	vSet2.haberagosto = 0;
	vSet2.haberseptiembre = 0;
	vSet2.haberoctubre = 0;
	vSet2.habernoviembre = 0;
	vSet2.haberdiciembre = 0;
	vSet2.previsionenero = 0;
	vSet2.previsionfebrero = 0;
	vSet2.previsionmarzo = 0;
	vSet2.previsionabril = 0;
	vSet2.previsionmayo = 0;
	vSet2.previsionjunio = 0;
	vSet2.previsionjulio = 0;
	vSet2.previsionagosto = 0;
	vSet2.previsionseptiembre = 0;
	vSet2.previsionoctubre = 0;
	vSet2.previsionnoviembre = 0;
	vSet2.previsiondiciembre = 0;
	vSet2.previsionanual = 0;	
	vSet2.saldoenero = 0;
	vSet2.saldofebrero = 0;
	vSet2.saldomarzo = 0;
	vSet2.saldoabril = 0;
	vSet2.saldomayo = 0;
	vSet2.saldojunio = 0;
	vSet2.saldojulio = 0;
	vSet2.saldoagosto = 0;
	vSet2.saldoseptiembre = 0;
	vSet2.saldooctubre = 0;
	vSet2.saldonoviembre = 0;
	vSet2.saldodiciembre = 0;
	vSet2.saldoejercicioanterior = 0;
	vSet2.totaldebe = 0;
	vSet2.totalhaber = 0;
	vSet2.saldo = 0;
	
	databaseManager.saveData(vSet2)
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 *
 * @param {String} ALINEACION
 *
 *
*
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"6D586D94-DC2D-4377-90CE-18846F818A45"}
 */
function PreparaLinea2(CAMPO,LONGITUD,ALINEACION)
{	
	if(CAMPO == null)
	{
		CAMPO = '';
	}
	var espacios = null
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '0';
	}

	if (ALINEACION == 'Left')
	    return CAMPO + espacios;
	else
	    return espacios + CAMPO;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7013FD83-10C4-4285-8D0D-2FE53C44E112"}
 */
function onDataChangeCIF() {
	// TODO Auto-generated method stub
	var ok = true
	//if(cif) ok = globals.validateCIF(cif)
	if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
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
 * @properties={typeid:24,uuid:"6D1E9870-8FA1-46E2-A03A-FA8CA1DCF2DF"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Delegaciones';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de esta Delegación';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_1.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),0,40);				
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
  *
 *
 * @properties={typeid:24,uuid:"ADB4FC23-43DE-4EA4-B1BD-0325E20C7BDC"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Delegaciones'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'DEL'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de esta Delegación'.toUpperCase():
		DREF = forms.FrmDelegacionesGC.idcliente.toString();
		HREF = forms.FrmDelegacionesGC.idcliente.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'DEL'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}
