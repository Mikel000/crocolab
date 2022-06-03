import React from "react";
import '../styles/Core.css'
import '../styles/pages.css'


function Tips() {
	return (
		<div className='lmj-cart'>
			<p className = 'tips'>
			<h1 className = 'generaltips'>
				Programs 
			</h1>
            Several programs offering a green certification for your lab exist; LEAF (Laboratory Efficiency Assessment Framework) program from UCL ; <a href="https://sustain.ucsd.edu/involve/green-labs.html#Resources">Green lab program</a> from UCSD is similar to LEAF, since 2013 106 labs received this certification,which is inspired from the last and biggest one : <a href = 'https://www.mygreenlab.org/green-lab-certification.html'> My Green Lab Certification </a> this NGO support more than 900 labs across the world and is one of the more considered. If you are in Canada there is  <a href='https://durable.umontreal.ca/fileadmin/durable/documents/07-02-2017_Manuel_MON_ECOLABO_FINAL_avec_Fiche_evaluation.pdf'>Mon écolabo</a> made by 2 researchers from UdeM.
            Being part of such programs offer you guidelines to reduce your C02 emissions, formations of your team on efficient actions, discounts on partners suppliers and obviously a network of researchers wanting to reduce their impact. LEAF also comprises an online calculator allowing you to consider changing your materials to greener ones. 
			<h1 id = 'inititle'>
                 Other initiatives 	
			</h1>
            There are  also some other internet platforms such as <a href="https://www.labconscious.com">LabConscious </a>
 providing the same kind of tips, formations and ressources but without certification, this website also allows you to find communities close to you. As well as <a href="https://www.gpescientific.co.uk/sustainable-solutions">GPE scientific</a>
 , LabConscious provides sustainable lab purchases. 
            Also in France there is <a href="https://labos1point5.org/les-initiatives">labos1point5</a>
, a community wanting to make greener all the French research world and not only the labs, this collective is financially supported by several french institutions (CNRS, INRAE). 

My green lab also created a label adopted by chemical suppliers to display the impact of their product, this label is called <a href="https://act.mygreenlab.org">ACT </a>
 but is also known as Environmental Impact Factor (EIF) criteria. It was adopted by big suppliers like MilliporeSigma. This kind of initiative allows labs to have transparent information on what they buy and enables them to easily reduce their carbon footprint.
			
            </p>
		</div>
	)
}
export default Tips;