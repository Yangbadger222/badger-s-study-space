const FENCE = "```";

export const CO_WRITER_SAMPLE_TEMPLATE = `# Badger Study Desk Co-Writer

> Badger Study Desk's built-in writing canvas for notes, reports, tutorials, and AI-assisted drafts.

### Features

- Support Standard Markdown / CommonMark / GFM for everyday writing
- Real-time preview for headings, tables, code, math, flowchart, and sequence diagrams
- AI editing workflows for rewrite, shorten, and expand
- HTML tag decoding for tags like <sub>, <sup>, <abbr>, and <mark>
- A practical starter draft for Badger Study Desk product docs and learning content

## Headers (Underline)

Badger Study Desk Learning Note
=============

Badger Study Desk Study Outline
-------------

### Characters

----

~~Deprecated behavior~~ <s>Legacy formatting path</s>
*Italic* _Italic_
**Emphasis** __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___

Superscript: X<sup>2</sup>, Subscript: O<sub>2</sub>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Large Language Model">LLM</abbr> layer powers Badger Study Desk while the <abbr title="Retrieval Augmented Generation">RAG</abbr> layer provides grounded knowledge support.

### Blockquotes

> Badger Study Desk helps students turn questions into structured understanding.
>
> "Learn deeply, write clearly.", [Badger Study Desk](#badger-study-desk-co-writer)

### Links

[Badger Study Desk Co-Writer](#badger-study-desk-co-writer "co-writer section")

[Badger Study Desk Learning Note](#badger-study-desk-learning-note)

[Badger Study Desk Repository](https://github.com/Yangbadger222/badger-s-study-space)

[Reference link][study-desk-doc]

[study-desk-doc]: #badger-study-desk-learning-note

### Code Blocks

#### Inline code

\`deeptutor chat --once "Summarize this section"\`

#### Code Blocks (Indented style)

    from deeptutor.runtime.orchestrator import ChatOrchestrator
    orchestrator = ChatOrchestrator()
    print("Badger Study Desk is ready.")

#### Python

${FENCE}python
from deeptutor.runtime.orchestrator import ChatOrchestrator
from deeptutor.core.context import UnifiedContext


async def run_demo() -> str:
    orchestrator = ChatOrchestrator()
    context = UnifiedContext(
        user_query="Explain Newton's second law",
        capability="chat",
    )
    result = await orchestrator.run(context)
    return result.get("response", "")
${FENCE}

#### JSON config

${FENCE}json
{
  "app_name": "Badger Study Desk",
  "default_capability": "chat",
  "enabled_tools": ["rag", "web_search", "code_execution", "reason"],
  "ui": {
    "co_writer_template": true
  }
}
${FENCE}

#### HTML code

${FENCE}html
<section class="deeptutor-card">
  <h1>Badger Study Desk</h1>
  <p>Write, revise, and organize learning content with AI.</p>
</section>
${FENCE}

### Images

![](/logo-ver2.png)

> Badger Study Desk brand mark used inside the co-writer template.

### Lists

- Badger Study Desk Chat
- Badger Study Desk Co-Writer
- Badger Study Desk Research

1. Draft a concept note
2. Ask AI to refine it
3. Export the polished markdown

### Tables

Feature       | Description
------------- | -------------
Co-Writer     | Draft and refine Markdown content
Chat          | Ask questions and iterate ideas
Research      | Build structured multi-step reports

| Capability    | Primary Use Case                     |
| ------------- | ------------------------------------ |
| \`chat\`       | General tutoring and guidance        |
| \`deep_solve\` | Structured problem solving           |
| \`deep_question\` | Question generation and validation |

### Markdown extras

- [x] Draft a Badger Study Desk product note
- [x] Add references and structure
- [ ] Polish the final explanation
  - [ ] Check headings
  - [ ] Check citations

### TeX (LaTeX)

$$ E=mc^2 $$

Inline $$E=mc^2$$ appears in physics notes, and Inline $$a^2+b^2=c^2$$ appears in geometry notes.

$$\\sqrt{3x-1}+(1+x)^2$$

$$ \\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$

### FlowChart

${FENCE}flow
st=>start: Student asks a question
op=>operation: Badger Study Desk analyzes intent
cond=>condition: Need deep workflow?
chat=>operation: Answer with chat capability
solve=>operation: Route to deep solve
e=>end: Return structured response

st->op->cond
cond(no)->chat
cond(yes)->solve
chat->e
solve->e
${FENCE}

### Sequence Diagram

${FENCE}seq
Student->Badger Study Desk: Ask for help
Badger Study Desk->KnowledgeBase: Load context
Note right of Badger Study Desk: Collect memory\\nand relevant knowledge
Badger Study Desk-->Student: Return guided response
Student->>Badger Study Desk: Request rewrite in co-writer
${FENCE}

### End
`;
