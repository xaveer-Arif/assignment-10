import React from 'react';
import { Image } from 'react-bootstrap';
import './Doctor.css'

const Doctor = () => {
    return (
        <div className = 'treading pb-5'>
            <h1 className = 'text-start ms-5'> Editor-in-Chief</h1>
            <div className = 'bg-white' >
                <Image className = '' src="https://img.medscapestatic.com/pi/global/hs/hs-topol-eric-140x160.jpg"  alt="" roundedCircle/>
                
                    <h2> Eric J. Topol, MD</h2>
                    <h5>Medscape Editor-in-Chief</h5>
             
                
           
            <p>Director, Scripps Translational Science Institute; Executive Vice President and Professor of Molecular Medicine, The Scripps Research Institute; Senior Consultant, Division of Cardiovascular Diseases, Scripps Clinic, La Jolla, California; Editor-in-Chief, Medscape

            </p>
        </div>
        </div>
    );
};

export default Doctor;