import TypeIt from "typeit-react";

function TType(){
    return(
        <TypeIt
        options={{ loop: isFinite }}
        getBeforeInit={(instance) => {
          instance.type("   Profissional.").pause(500).go();

          // Remember to return it!
          return instance;
        }}
      />
    )
}

export default TType