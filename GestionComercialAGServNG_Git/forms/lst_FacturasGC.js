/**
 * @properties={typeid:24,uuid:"76514C95-CDB1-4115-BD76-84F974D5D20D"}
 */
function btn_goRec()
{
	globals.GCcurID_Factura = id
	var uid = id
	var result = forms.lst_GCultimasfacturas.foundset.selectRecord(uid)
	var fsCount = databaseManager.getFoundSetCount(forms.lst_GCultimasfacturas.foundset);
	while(result==false)
	{
		if(fsCount == forms.lst_GCultimasfacturas.foundset.getSize())
	{
		return;
	}
	forms.lst_GCultimasfacturas.foundset.setSelectedIndex(forms.lst_GCultimasfacturas.foundset.getSize());
	result = forms.lst_GCultimasfacturas.foundset.selectRecord(uid);
	}
	
}

/**
 * @properties={typeid:24,uuid:"4C13BF5E-CFE4-4188-842A-88232231E79B"}
 */
function btn_sortAsc()
{
	if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai){
		elements.lbl_enviadaTBAI.visible = true;		
	}
	else{
		elements.lbl_enviadaTBAI.visible = false;
	}
	_super.btn_sortAsc()
	foundset.sort("eje_cfa asc, nup_cfa asc, ser_cfa asc")
	
}

/**
 * @properties={typeid:24,uuid:"232F5D70-D5F5-461E-9F57-85900B6E5344"}
 */
function btn_sortDesc()
{
	if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai){
		elements.lbl_enviadaTBAI.visible = true;		
	}
	else{
		elements.lbl_enviadaTBAI.visible = false;
	}
	_super.btn_sortDesc()
	foundset.sort('eje_cfa desc, nup_cfa desc, ser_cfa desc')
	
}
