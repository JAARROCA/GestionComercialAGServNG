/**
 * @properties={typeid:24,uuid:"6095F511-0AA0-407F-9F67-1E82B7EBEDD8"}
 */
function btn_sortAsc()
{
	elements.btn_sortAsc.imageURL = 'media:///sort_asc_blk.gif';
	elements.btn_sortDesc.imageURL = 'media:///sort_desc_grey.gif';
}

/**
 * @properties={typeid:24,uuid:"1A594884-701E-4EA1-85C0-E6D86A9F0AF5"}
 */
function btn_sortDesc()
{
	elements.btn_sortAsc.imageURL = 'media:///sort_asc_grey.gif';
	elements.btn_sortDesc.imageURL = 'media:///sort_desc_blk.gif';
}

/**
 * @properties={typeid:24,uuid:"A2EA10BF-BE8C-4752-89D3-8AF46CC354E2"}
 */
function btn_toggleList()
{
	//zoom the record list open and closed
	//make the rec list bigger or smaller
	var lh = forms.frm_nav_main_maestrosGC.elements.tabs_recList.getHeight()
	if(lh > 23)
	{
		//expanded - so make smaller
//		elements.btn_triangle.setImageURL('media:///arrow_closed.gif')
	}
	else
	{
		//not expanded - so make bigger
//		elements.btn_triangle.setImageURL('media:///arrow_open.gif')
	}
	
	forms.frm_nav_main_maestrosGC.sub_toggleRecList();
}
