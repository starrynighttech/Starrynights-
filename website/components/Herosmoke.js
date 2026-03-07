export default function HeroSmoke(){
  return(
    <div style={{
      position:"relative",
      height:"100vh",
      background:"#000",
      overflow:"hidden"
    }}>

      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position:"absolute",
          width:"100%",
          height:"100%",
          objectFit:"cover",
          opacity:0.7
        }}
      >
        <source src="/videos/Smoke.mp4" type="video/mp4"/>
      </video>

      <div style={{
        position:"relative",
        zIndex:2,
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        color:"white"
      }}>

        <img src="/logo.png" style={{width:200}}/>

        <h1>UltraTechHub</h1>

      </div>

    </div>
  )
}