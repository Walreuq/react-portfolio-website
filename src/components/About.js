import React from 'react'
import SaygwareLogo from '../images/swlogo.png';

const About=() => {
  return (
    <section id="about" className="aboutSection ">
      <div className=" text-center row border rounded bg-warning p-4">
        <div className="col">
          <h1 className="mb-4">Hakkımda</h1>
            <p>Merhaba, ismim Osman Uğur Demirer.</p>
            <p className="text-dark">13 yaşımdan beri bilgisayara olan ilgim ve alakam dolayısıyla bilişim sektöründe kendimi geliştirme hayali kurdum ve bu hayalin gerçekleştirmesi için de boş vakitlerimde fırsat buldukça kendimi geliştirecek bilgilere ulaşmaya çalıştım, bu uğraşım ve isteğim halen devam etmektedir.</p>
            <p>Bilişim tutkumdan bağımsız olarak lise hayatımda sigortacılık eğitimi aldım. Yaklaşık 3 yıl önce bilişim alanında tecrübe kazanmaya karar verdim ve Climax Host adlı hosting şirketinde 1.5 yıl çalıştım. Bu sayede kendimi network, yazılım, işletim sistemleri alanlarında geliştirme fırsatı buldum.</p>
            <p>Gençliğime ve öğrenme azmime güvenerek kendimi bilişim alanında daha çok geliştirerek, yeni iş imkanları bulmak ve bunların bana katacağı tecrübeleri yaşamak istiyorum.</p>
        </div>
        <div className="col d-flex flex-column justify-content-around">
          <div className="">
            <img src={SaygwareLogo} />
          </div>
          <div>
            <h1>Website:</h1><p ><a className="fs-3 text-decoration-none text-dark" href="https://saygware.com">Saygware.com</a></p>
          </div>
        </div>

      </div>
    </section>
  )
}


export default About;