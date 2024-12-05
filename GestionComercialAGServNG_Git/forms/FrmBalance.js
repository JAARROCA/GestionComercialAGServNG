/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"574708F0-1748-4BDF-87A9-6D53D77E7850",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D6D9543A-107F-465D-85C5-249F4C0030F8",variableType:93}
 */
var DesdeFecha = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"598DF551-40C6-49B4-9AE2-93583DDC7868"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	
	
		
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"40E894AD-0C05-4DE7-A0A3-7C610CE2EEBC"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	onLoad(event)
	DesdeFecha = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	HastaFecha = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	elements.tabs_mainPanel2.tabIndex = 0;
	onDataChange()
	//scopes.autologout.startAutoLogout();
	
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"3CD25E86-416A-4D16-BBE4-67D299585F82"}
 */
function onDataChange() {
	// TODO Auto-generated method stub
	forms.lst_topBalance.draw_chartjs()
	forms.lst_topBalance2.draw_chartjs()
	forms.lst_topBalance3.draw_chartjs()
	forms.lst_topBalance4.draw_chartjs()
	forms.lst_topBalance5.draw_chartjs()
	//forms.lst_topBalance6.draw_chart()
	//forms.lst_topBalance7.draw_chart()
	/*switch (elements.tabs_mainPanel.tabIndex)
	{
		case 1:
			forms.lst_topBalance.draw_chart()
			break;
		case 2:
			forms.lst_topBalance2.draw_chart()
			break;
		case 3:
			forms.lst_topBalance3.draw_chart()
			break;
		case 4:
			forms.lst_topBalance4.draw_chart()
			break;
		case 5:
			forms.lst_topBalance5.draw_chart()
			break;
		default: break;
	}*/
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6FBA2AF1-D622-4EA2-84CA-D457DED6C480"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}

/**
 *
 *
 * @properties={typeid:24,uuid:"33AC654E-CE1E-4D46-806D-F99DBBCEDF4E"}
 */
function print_default()
{
	rpt_Balance_list();
}

/**
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"64A08B87-CB89-4B64-9E29-0ADCBDC3DDA2"}
 * @SuppressWarnings(unused)
 */
function rpt_Balance_list()
{
	/*try
	{
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) plugins.WebClientUtils.executeClientSideJS('window.print()');
		else 
		{
			controller.print(false,true,null);
		}		   
		  
	}
	catch (e) 
	{
	   //plugins.dialogs.showErrorDialog('Error',e.toString(),'Ok')
	   application.output(e);   
	   return;
	}*/
	if(DesdeFecha & HastaFecha)
	{
		globals.btn_runJasperReportBalanceGC(utils.dateFormat(DesdeFecha,'dd-MM-yyyy'),utils.dateFormat(HastaFecha,'dd-MM-yyyy'))
	}
}
