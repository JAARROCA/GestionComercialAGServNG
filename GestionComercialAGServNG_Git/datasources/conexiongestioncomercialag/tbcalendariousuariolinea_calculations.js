/**
 *
 * @properties={typeid:36,uuid:"9D6051F8-2910-49D3-A619-DBA8BFC12DD4"}
 */
function clc_appt_title()
{
	return asunto + '(' + utils.dateFormat(start_datetime,'MMM dd, yyyy hh:mm a ') + ')';
}

/**
 *
 * @properties={typeid:36,uuid:"AE4C174A-984C-473D-A8B6-89A0CDE19C8E"}
 */
function clc_appointment_icon()
{
	return "media:///cal_appointment.png";
}

/**
 *
 * @properties={typeid:36,uuid:"BB9C2A32-F194-4B46-B0DB-8FC1DA9662EE"}
 */
function clc_appt_duration()
{
	/*
	 * Method Name : clc_appt_duration
	 * Input       : 
	 * Output      : returns the formatted appointment duration
	 * Note		   : 
	 * 
	 * Modification History : 
	 * 
	 * 17/June/2010					Pradipta Behera			Created Method
	 */
	
	//when all, date, month and year are same
	if (start_datetime.getDate() == end_datetime.getDate() 
			&& start_datetime.getMonth() == end_datetime.getMonth()
			&& start_datetime.getFullYear() == end_datetime.getFullYear())
		return utils.dateFormat(start_datetime,'MMM dd, yyyy hh:mm a - ') + 
			utils.dateFormat(end_datetime,'hh:mm a');
	//when all, date, month are different but year is same
	else if (start_datetime.getDate() != end_datetime.getDate() 
			&& start_datetime.getMonth() != end_datetime.getMonth()
			&& start_datetime.getFullYear() == end_datetime.getFullYear())
		return utils.dateFormat(start_datetime,'MMM dd, hh:mm a - ') + 
			utils.dateFormat(end_datetime,'MMM dd, hh:mm a, yyyy');
	//when all, date, month and year are different
	else if (start_datetime.getDate() != end_datetime.getDate() 
			&& start_datetime.getMonth() != end_datetime.getMonth()
			&& start_datetime.getFullYear() != end_datetime.getFullYear())
		return utils.dateFormat(start_datetime,'MMM dd,yyyy hh:mm a - ') + 
			utils.dateFormat(end_datetime,'MMM dd,yyyy hh:mm a');
	else
		return utils.dateFormat(start_datetime,'MMM dd,yyyy hh:mm a - ') + 
			utils.dateFormat(end_datetime,'MMM dd,yyyy hh:mm a');
}
