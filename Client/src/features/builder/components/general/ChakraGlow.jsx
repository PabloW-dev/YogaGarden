

export default function ChakraGlow({ introFinished }) {

  return (
    <div className="chakra-glow"
      style={{
        backgroundColor: introFinished
          ? "rgba(255,255,255,1)"
          : "rgba(255,146,0,0.8)"
      }}
    > 
    </div>
  )
}
