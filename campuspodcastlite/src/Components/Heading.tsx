import "../Styles/Heading.css"

type HeadingProps = {
    logo: string
    text: string
  }
  
  export default function Heading({ logo, text }: HeadingProps) {
    return (
      <div className="heading-wrapper">
        <img src={logo} alt="logo" />
        <h3>{text}</h3>
      </div>
    )
  }