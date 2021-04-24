import { useState } from 'react'

export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='contact-item'>
                  <h3>Contact Info</h3>
                    <div className='contact-info'>
                      <p>
                        <span>
                          <i className='fa fa-map-marker'></i> Address
                        </span>
                        {props.data ? props.data.address : 'loading'}
                      </p>
                      <p>
                        <span>
                          <i className='fa fa-phone'></i> Phone
                        </span>{' '}
                        {props.data ? props.data.phone : 'loading'}
                      </p>
                      <p>
                        <span>
                          <i className='fa fa-envelope'></i> Email
                        </span>{' '}
                        {props.data ? props.data.email : 'loading'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href=''>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
