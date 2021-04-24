export const Chatbot = () => {
    return (
        <div id='chatbot' className='text-center'>
          <div className='container'>
            <div className='col-md-8 col-md-offset-2 section-title'>
              <div className="template">
                <div className="phone">
                    <div className="speaker"></div>
                    <div className="flashlight"></div>
                    <div className="screen">
                      <iframe
                          allow="microphone;"
                          src="https://console.dialogflow.com/api-client/demo/embedded/15e0778c-8a2c-4e93-bf43-5f4b3fe75058">
                      </iframe>
                    </div>
                    <button className="home"></button>
                  </div>
                </div>
                <div className="image">
                  <img src='img/portfolio/robot.png' style={{width: 350}}/>
                </div>
            </div>  
          </div>
        </div>
    )
}

