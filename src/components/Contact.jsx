import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contacts" id='contact' >
      <h1>Contacts</h1>
      <div className="items">
          <a href="https://www.linkedin.com/in/ak-vishwakarma0/" target="_blank"><i class="ri-linkedin-box-line"></i></a>
          <a href="https://github.com/Ak-vishwakarma-01" target="_blank"><i class="ri-github-fill"></i></a>
          <a href="https://www.instagram.com/ak.vishwakarma.0" target="_blank"><i class="ri-instagram-line"></i></a>
          <a href="https://www.facebook.com/ak.vishwkarma.0/" target="_blank"><i class="ri-facebook-box-line"></i></a>
          {/* <i class="ri-threads-line"></i> */}
      </div>
    </div>
    </>
  )
}

export default Contact