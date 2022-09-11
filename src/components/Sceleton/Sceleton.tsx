import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton: React.FC = () => (
    <ContentLoader 
    speed={2}
    width={window.innerWidth < 821 ? 250 : 330}
    height={530}
    viewBox="0 0 330 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffffff"
  >
    <rect x="32" y="320" rx="9" ry="9" width="270" height="17" /> 
    <circle cx="161" cy="150" r="137" /> 
    <rect x="-2" y="350" rx="10" ry="10" width="330" height="106" /> 
    <rect x="173" y="467" rx="9" ry="9" width="153" height="51" /> 
    <rect x="1" y="468" rx="9" ry="9" width="153" height="51" />
  </ContentLoader>
)

export {Sceleton}