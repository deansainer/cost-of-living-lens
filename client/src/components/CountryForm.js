import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

const CountryForm = () => {
    const [countryName, setCountryName] = useState('')
    
    const options = [
      { value: 'Albania', label: 'Albania' },
      { value: 'Algeria', label: 'Algeria' },
      { value: 'Argentina', label: 'Argentina' },
      { value: 'Armenia', label: 'Armenia' },
      { value: 'Australia', label: 'Australia' },
      { value: 'Austria', label: 'Austria' },
      { value: 'Azerbaijan', label: 'Azerbaijan' },
      { value: 'Vietnam', label: 'Vietnam' },
      { value: 'Belarus', label: 'Belarus' },
      { value: 'Belgium', label: 'Belgium' },
      { value: 'Bolivia', label: 'Bolivia' },
      { value: 'Bosnia', label: 'Bosnia' },
      { value: 'Brazil', label: 'Brazil' },
      { value: 'Bulgaria', label: 'Bulgaria' },
      { value: 'Canada', label: 'Canada' },
      { value: 'Chile', label: 'Chile' },
      { value: 'China', label: 'China' },
      { value: 'Colombia', label: 'Colombia' },
      { value: 'Costa Rica', label: 'Costa Rica' },
      { value: 'Croatia', label: 'Croatia' },
      { value: 'Cyprus', label: 'Cyprus' },
      { value: 'Czech Republic', label: 'Czech Republic' },
      { value: 'Denmark', label: 'Denmark' },
      { value: 'Ecuador', label: 'Ecuador' },
      { value: 'Egypt', label: 'Egypt' },
      { value: 'Estonia', label: 'Estonia' },
      { value: 'Finland', label: 'Finland' },
      { value: 'France', label: 'France' },
      { value: 'Georgia', label: 'Georgia' },
      { value: 'Germany', label: 'Germany' },
      { value: 'Greece', label: 'Greece' },
      { value: 'Hungary', label: 'Hungary' },
      { value: 'India', label: 'India' },
      { value: 'Indonesia', label: 'Indonesia' },
      { value: 'Venezuela', label: 'Venezuela' },
      { value: 'Iraq', label: 'Iraq' },
      { value: 'Ireland', label: 'Ireland' },
      { value: 'Israel', label: 'Israel' },
      { value: 'Italy', label: 'Italy' },
      { value: 'Jamaica', label: 'Jamaica' },
      { value: 'Japan', label: 'Japan' },
      { value: 'Jordan', label: 'Jordan' },
      { value: 'Kazakhstan', label: 'Kazakhstan' },
      { value: 'Kenya', label: 'Kenya' },
      { value: 'Uruguay', label: 'Uruguay' },
      { value: 'Latvia', label: 'Latvia' },
      { value: 'United States', label: 'United States' },
      { value: 'Lithuania', label: 'Lithuania' },
      { value: 'Luxembourg', label: 'Luxembourg' },
      { value: 'Malaysia', label: 'Malaysia' },
      { value: 'Malta', label: 'Malta' },
      { value: 'Mauritius', label: 'Mauritius' },
      { value: 'Mexico', label: 'Mexico' },
      { value: 'Morocco', label: 'Morocco' },
      { value: 'Nepal', label: 'Nepal' },
      { value: 'Netherlands', label: 'Netherlands' },
      { value: 'New Zealand', label: 'New Zealand' },
      { value: 'North Macedonia', label: 'North Macedonia' },
      { value: 'Norway', label: 'Norway' },
      { value: 'Oman', label: 'Oman' },
      { value: 'United Kingdom', label: 'United Kingdom' },
      { value: 'Palestine', label: 'Palestine' },
      { value: 'Panama', label: 'Panama' },
      { value: 'Peru', label: 'Peru' },
      { value: 'Philippines', label: 'Philippines' },
      { value: 'Poland', label: 'Poland' },
      { value: 'Portugal', label: 'Portugal' },
      { value: 'United Arab Emirates', label: 'United Arab Emirates' },
      { value: 'Romania', label: 'Romania' },
      { value: 'Uzbekistan', label: 'Uzbekistan' },
      { value: 'Ukraine', label: 'Ukraine' },
      { value: 'Serbia', label: 'Serbia' },
      { value: 'Singapore', label: 'Singapore' },
      { value: 'Slovakia', label: 'Slovakia' },
      { value: 'Slovenia', label: 'Slovenia' },
      { value: 'South Africa', label: 'South Africa' },
      { value: 'South Korea', label: 'South Korea' },
      { value: 'Spain', label: 'Spain' },
      { value: 'Sri Lanka', label: 'Sri Lanka' },
      { value: 'Sweden', label: 'Sweden' },
      { value: 'Switzerland', label: 'Switzerland' },
      { value: 'Taiwan', label: 'Taiwan' },
      { value: 'Thailand', label: 'Thailand' },
      { value: 'Tunisia', label: 'Tunisia' },
      { value: 'Turkey', label: 'Turkey' }
    ];

    function handleSubmit(e){
      e.preventDefault()
      window.location = `/country/${countryName}`
    }

  return (
    <div>
       <form className='country_form' onSubmit={handleSubmit}>
        <Select className='select_country_bar' placeholder={'Albania'} onChange={(e) => setCountryName(e.value)} options={options}/>
        <button type='submit' className={'submit_btn'}>Submit</button>
        </form> 
    </div>
  )
}

export default CountryForm;