import { Button, Typography } from "@mui/material"

const About = () => {
  return (
    <div className="about-main" style={{ flexGrow: 1, overflow: 'auto' }}>
      <div className="about-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div className="about" 
          style={{
            display:'flex', 
            alignItems:'center', 
          }}>
          
          <img 
            className="about-photo" 
            src="src/imgs/about-stock-photo.jpg" 
            alt="stock-photo" 
            style={{maxWidth:'40%', marginRight:'20px'}}/>
          <div className="about-body">
            <Typography className="about-title"variant="h2" style={{fontWeight:'bold', color: '#2243b6'}}>
              We Help Clients Become Successful
            </Typography>
            <div className="about-para">
              <Typography style={{fontSize:'20px', fontWeight:'lighter'}}>
                Welcome to Crystal Clear Consulting where our passion lies in empowering the underserved community with the keys to financial literacy. Our purpose is to provide accessible materials and valuable information, ensuring that our clients achieve optimal outcomes when it comes to building generational wealth and constructing a secure foundation for their families. We extend a warm invitation to those eager to seize opportunities, guiding them towards their aspirations. Moreover, we recognize the potential in those who may not yet see it, and we're excited to reveal pathways to success that may have gone unnoticed.
              </Typography>
              <Button variant="contained" 
                style={{
                    margin:'20px 20px 80px 190px', 
                    borderRadius:'20px', 
                    fontSize: '20px', 
                    fontWeight:'lighter'}}>
                <Typography variant="h7" fontWeight="bold">
                  Learn More <br />
                <Typography fontWeight="light">
                    {" "}
                    Click here
                </Typography>
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      <div className="about" style={{display:'flex', alignItems:'center', flexGrow: 1}}>
        <div style={{display:'flex', flexDirection:'column'}}>
          <Typography className="about-title" variant="h4" style={{fontWeight:'bold', color: '#2243b6', marginBottom: '10px'}}>
            Our Vision for Community-Driven Financial Empowerment
          </Typography>
          <div className="about-para">
            <Typography style={{fontSize:'20px', fontWeight:'lighter', marginBottom: '10px'}}>
              At the heart of our mission is a commitment to community-driven growth. We don't just consult; we collaborate to bring dreams to life. Our vision is a future where financial knowledge is a bridge to prosperity, uniting individuals and families for a brighter tomorrow. Join us on this transformative journey as we pave the way toward financial empowerment for all.
            </Typography>
          </div>
        </div>
          <img
            className="about-photo-two"
            src="src/imgs/about-stock-photo4.jpg"
            alt="stock-photo2"
            style={{maxWidth:'40%', marginRight:'20px'
          }}/>
          </div>
    </div>
  </div>
  )
}

export default About