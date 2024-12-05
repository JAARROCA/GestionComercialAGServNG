/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"15DB031C-8F49-4C71-9FDC-BEDFD4A889CB"}
 */
var uuid = null;

/**
*
 * @properties={typeid:24,uuid:"ECA2CD7F-BD85-4DDF-ABB4-37791BCE89FE"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar CobroPago GC').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"7E6E7D9D-865C-4A2C-8FBF-B8D3437C662D"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	if(!globals.FechaAsientoDuplicar){
		forms.dlgDuplicarCobrosPagosGC.elements.FechaAsientoDuplicar.requestFocus();
	}
	else{
		application.getWindow('Duplicar CobroPago GC').hide();
		globals.GCenableBgElements();
		
		var arg1 = forms.FrmCobrosPagosGC.foundset;
		var arg2 = new Array();
		duplicateRec(arg1,arg2)
		
		
		
		var result = forms.FrmCobrosPagosGC.foundset.selectRecord(uuid);
		var fsCount = databaseManager.getFoundSetCount(forms.FrmCobrosPagosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmCobrosPagosGC.foundset.getSize())
			{
				return;
			}
			forms.FrmCobrosPagosGC.foundset.setSelectedIndex(forms.FrmCobrosPagosGC.foundset.getSize());
		result = forms.FrmCobrosPagosGC.foundset.selectRecord(uuid);
		}
		forms.frm_nav_buttons_facturasGC.btn_showAll()
		forms.lst_CobrosPagosGC.btn_sortDesc()
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"6C553A19-731B-4D39-BFD7-C765681792FF"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Duplicar CobroPago GC').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * @type {JSFoundset}
 *
 *
 * @properties={typeid:35,uuid:"F23FDEB7-E416-47F6-B96C-9A57B6CAC4A0",variableType:-4}
 */
var related;

/**
 * 
 * @param {JSFoundset} arg1
 * 
 * @param {Array} arg2
 * 
 * 
 *
 * @properties={typeid:24,uuid:"D9FB4CA6-C69E-4131-8856-3C565003349A"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	//var ident = dup.cuentacontable
	dup.id = application.getUUID()
	uuid = dup.id
	dup.fechavencimiento = globals.FechaAsientoDuplicar
	dup.numdocumento = null;
	dup.situacion = null;
	dup.fecharemesa = null;
	dup.cuentabanco = null;
	//*********
	databaseManager.saveData();
	
	for(var k=0;k<relatedFsArray.length;k++)
	{
		related = fs[relatedFsArray[k]];
		related.loadAllRecords();
		var fsCount = databaseManager.getFoundSetCount(related);
	   for(var i=1;i<=fsCount;i++)
	   {
	       var relatedOriginal = related.getRecord(i);
	       var relatedDub = dup[relatedFsArray[k]].getRecord(dup[relatedFsArray[k]].newRecord(false,false));
	       databaseManager.copyMatchingFields( relatedOriginal,  relatedDub);
	   }
	}
	
	databaseManager.saveData();
	//*********
	//return ident;
	//*********
	}
