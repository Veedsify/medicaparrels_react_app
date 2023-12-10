import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  lightDefaultTheme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";

import styled from "styled-components";

const StyledDiv = styled.div`
  all: unset;
`;

const Editor = () => {
  // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote({
    
  });

  return (
    <StyledDiv>
      <BlockNoteView editor={editor} theme={lightDefaultTheme} />
    </StyledDiv>
  );
};

export default Editor;
