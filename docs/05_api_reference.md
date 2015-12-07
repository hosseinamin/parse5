# API Reference
## Objects
<dl>
<dt><a href="#parse5">parse5</a> : <code>object</code></dt>
<dd></dd>
</dl>
## Typedefs
<dl>
<dt><a href="#ElementLocationInfo">ElementLocationInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#LocationInfo">LocationInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ParserOptions">ParserOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#SerializerOptions">SerializerOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#SAXParserOptions">SAXParserOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TreeAdapter">TreeAdapter</a> : <code>Object</code></dt>
<dd></dd>
</dl>
<a name="parse5"></a>
## parse5 : <code>object</code>
**Kind**: global namespace  

* [parse5](#parse5) : <code>object</code>
  * [.ParserStream](#parse5+ParserStream) ⇐ <code>stream.Writable</code>
    * [new ParserStream(options)](#new_parse5+ParserStream_new)
    * [.document](#parse5+ParserStream+document) : <code>ASTNode.&lt;document&gt;</code>
    * ["script" (scriptElement, documentWrite(html), resume)](#parse5+ParserStream+event_script)
  * [.SerializerStream](#parse5+SerializerStream) ⇐ <code>stream.Readable</code>
    * [new SerializerStream(node, [options])](#new_parse5+SerializerStream_new)
  * [.SAXParser](#parse5+SAXParser) ⇐ <code>stream.Transform</code>
    * [new SAXParser(options)](#new_parse5+SAXParser_new)
    * [.stop()](#parse5+SAXParser+stop)
    * ["startTag" (name, attributes, selfClosing, [location])](#parse5+SAXParser+event_startTag)
    * ["endTag" (name, [location])](#parse5+SAXParser+event_endTag)
    * ["comment" (text, [location])](#parse5+SAXParser+event_comment)
    * ["doctype" (name, publicId, systemId, [location])](#parse5+SAXParser+event_doctype)
    * ["text" (text, [location])](#parse5+SAXParser+event_text)
  * [.treeAdapters](#parse5+treeAdapters)
  * [.parse(html, [options])](#parse5+parse) ⇒ <code>ASTNode.&lt;Document&gt;</code>
  * [.parseFragment([fragmentContext], html, [options])](#parse5+parseFragment) ⇒ <code>ASTNode.&lt;DocumentFragment&gt;</code>
  * [.serialize(node, [options])](#parse5+serialize) ⇒ <code>String</code>

<a name="parse5+ParserStream"></a>
### parse5.ParserStream ⇐ <code>stream.Writable</code>
**Kind**: instance class of <code>[parse5](#parse5)</code>  
**Extends:** <code>stream.Writable</code>  

* [.ParserStream](#parse5+ParserStream) ⇐ <code>stream.Writable</code>
  * [new ParserStream(options)](#new_parse5+ParserStream_new)
  * [.document](#parse5+ParserStream+document) : <code>ASTNode.&lt;document&gt;</code>
  * ["script" (scriptElement, documentWrite(html), resume)](#parse5+ParserStream+event_script)

<a name="new_parse5+ParserStream_new"></a>
#### new ParserStream(options)
Streaming HTML parser with the scripting support.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>[ParserOptions](#ParserOptions)</code> | Parsing options. |

**Example**  
```js
var parse5 = require('parse5');
```
<a name="parse5+ParserStream+document"></a>
#### parserStream.document : <code>ASTNode.&lt;document&gt;</code>
Resulting document node.

**Kind**: instance property of <code>[ParserStream](#parse5+ParserStream)</code>  
<a name="parse5+ParserStream+event_script"></a>
#### "script" (scriptElement, documentWrite(html), resume)
Raised then parser encounters `<script>` element.

**Kind**: event emitted by <code>[ParserStream](#parse5+ParserStream)</code>  

| Param | Type | Description |
| --- | --- | --- |
| scriptElement | <code>ASTNode</code> | Script element that caused the event. |
| documentWrite(html) | <code>function</code> | Write additional `html` at the current parsing position. Suitable for the DOM `document.write` and `document.writeln` methods implementation. |
| resume | <code>function</code> | Resumes the parser. |

**Example**  
```js
var parse = require('parse5');
```
<a name="parse5+SerializerStream"></a>
### parse5.SerializerStream ⇐ <code>stream.Readable</code>
**Kind**: instance class of <code>[parse5](#parse5)</code>  
**Extends:** <code>stream.Readable</code>  
<a name="new_parse5+SerializerStream_new"></a>
#### new SerializerStream(node, [options])
Streaming AST node to HTML serializer.


| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node to serialize. |
| [options] | <code>[SerializerOptions](#SerializerOptions)</code> | Serialization options. |

**Example**  
```js
var parse5 = require('parse5');
```
<a name="parse5+SAXParser"></a>
### parse5.SAXParser ⇐ <code>stream.Transform</code>
**Kind**: instance class of <code>[parse5](#parse5)</code>  
**Extends:** <code>stream.Transform</code>  

* [.SAXParser](#parse5+SAXParser) ⇐ <code>stream.Transform</code>
  * [new SAXParser(options)](#new_parse5+SAXParser_new)
  * [.stop()](#parse5+SAXParser+stop)
  * ["startTag" (name, attributes, selfClosing, [location])](#parse5+SAXParser+event_startTag)
  * ["endTag" (name, [location])](#parse5+SAXParser+event_endTag)
  * ["comment" (text, [location])](#parse5+SAXParser+event_comment)
  * ["doctype" (name, publicId, systemId, [location])](#parse5+SAXParser+event_doctype)
  * ["text" (text, [location])](#parse5+SAXParser+event_text)

<a name="new_parse5+SAXParser_new"></a>
#### new SAXParser(options)
Streaming [SAX](https://en.wikipedia.org/wiki/Simple_API_for_XML)-style HTML parser.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>[SAXParserOptions](#SAXParserOptions)</code> | Parsing options. |

**Example**  
```js
var parse5 = require('parse5');
```
<a name="parse5+SAXParser+stop"></a>
#### saxParser.stop()
Stops parsing. Useful if you want parser to stop consume

**Kind**: instance method of <code>[SAXParser](#parse5+SAXParser)</code>  
**Example**  
```js
var parse5 = require('parse5');
```
<a name="parse5+SAXParser+event_startTag"></a>
#### "startTag" (name, attributes, selfClosing, [location])
Raised then parser encounters start tag.

**Kind**: event emitted by <code>[SAXParser](#parse5+SAXParser)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Tag name. |
| attributes | <code>String</code> | List of attributes in `{ key: String, value: String }` form. |
| selfClosing | <code>Boolean</code> | Indicates if tag is self-closing. |
| [location] | <code>[LocationInfo](#LocationInfo)</code> | Start tag source code location info. Available if location info is enabled in [SAXParserOptions](#SAXParserOptions). |

<a name="parse5+SAXParser+event_endTag"></a>
#### "endTag" (name, [location])
Raised then parser encounters end tag.

**Kind**: event emitted by <code>[SAXParser](#parse5+SAXParser)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Tag name. |
| [location] | <code>[LocationInfo](#LocationInfo)</code> | End tag source code location info. Available if location info is enabled in [SAXParserOptions](#SAXParserOptions). |

<a name="parse5+SAXParser+event_comment"></a>
#### "comment" (text, [location])
Raised then parser encounters comment.

**Kind**: event emitted by <code>[SAXParser](#parse5+SAXParser)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Comment text. |
| [location] | <code>[LocationInfo](#LocationInfo)</code> | Comment source code location info. Available if location info is enabled in [SAXParserOptions](#SAXParserOptions). |

<a name="parse5+SAXParser+event_doctype"></a>
#### "doctype" (name, publicId, systemId, [location])
Raised then parser encounters [document type declaration](https://en.wikipedia.org/wiki/Document_type_declaration).

**Kind**: event emitted by <code>[SAXParser](#parse5+SAXParser)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Document type name. |
| publicId | <code>String</code> | Document type public identifier. |
| systemId | <code>String</code> | Document type system identifier. |
| [location] | <code>[LocationInfo](#LocationInfo)</code> | Document type declaration source code location info. Available if location info is enabled in [SAXParserOptions](#SAXParserOptions). |

<a name="parse5+SAXParser+event_text"></a>
#### "text" (text, [location])
Raised then parser encounters text content.

**Kind**: event emitted by <code>[SAXParser](#parse5+SAXParser)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Text content. |
| [location] | <code>[LocationInfo](#LocationInfo)</code> | Text content code location info. Available if location info is enabled in [SAXParserOptions](#SAXParserOptions). |

<a name="parse5+treeAdapters"></a>
### parse5.treeAdapters
Provides built-in tree adapters which can be used for parsing and serialization.

**Kind**: instance property of <code>[parse5](#parse5)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| default | <code>[TreeAdapter](#TreeAdapter)</code> | Default tree format for parse5. |
| htmlparser2 | <code>[TreeAdapter](#TreeAdapter)</code> | Quite popular [htmlparser2](https://github.com/fb55/htmlparser2) tree format (e.g. used by [cheerio](https://github.com/MatthewMueller/cheerio) and [jsdom](https://github.com/tmpvar/jsdom)). |

**Example**  
```js
var parse5 = require('parse5');
```
<a name="parse5+parse"></a>
### parse5.parse(html, [options]) ⇒ <code>ASTNode.&lt;Document&gt;</code>
Parses HTML string.

**Kind**: instance method of <code>[parse5](#parse5)</code>  
**Returns**: <code>ASTNode.&lt;Document&gt;</code> - document  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | Input HTML string. |
| [options] | <code>[ParserOptions](#ParserOptions)</code> | Parsing options. |

**Example**  
```js
var parse5 = require('parse5');
```
<a name="parse5+parseFragment"></a>
### parse5.parseFragment([fragmentContext], html, [options]) ⇒ <code>ASTNode.&lt;DocumentFragment&gt;</code>
Parses HTML fragment.

**Kind**: instance method of <code>[parse5](#parse5)</code>  
**Returns**: <code>ASTNode.&lt;DocumentFragment&gt;</code> - documentFragment  

| Param | Type | Description |
| --- | --- | --- |
| [fragmentContext] | <code>ASTNode</code> | Parsing context element. If specified, given fragment will be parsed as if it was set to the context element's `innerHTML` property. |
| html | <code>string</code> | Input HTML fragment string. |
| [options] | <code>[ParserOptions](#ParserOptions)</code> | Parsing options. |

**Example**  
```js
var parse5 = require('parse5');
```
<a name="parse5+serialize"></a>
### parse5.serialize(node, [options]) ⇒ <code>String</code>
Serializes AST node to HTML string.

**Kind**: instance method of <code>[parse5](#parse5)</code>  
**Returns**: <code>String</code> - html  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node to serialize. |
| [options] | <code>[SerializerOptions](#SerializerOptions)</code> | Serialization options. |

**Example**  
```js
var parse5 = require('parse5');
```
<a name="ElementLocationInfo"></a>
## ElementLocationInfo : <code>Object</code>
**Kind**: global typedef  
**Extends:** <code>[LocationInfo](#LocationInfo)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| startTag | <code>[LocationInfo](#LocationInfo)</code> | Element's start tag [LocationInfo](#LocationInfo). |
| endTag | <code>[LocationInfo](#LocationInfo)</code> | Element's end tag [LocationInfo](#LocationInfo). |

<a name="LocationInfo"></a>
## LocationInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| line | <code>Number</code> | One-based line index |
| col | <code>Number</code> | One-based column index |
| startOffset | <code>Number</code> | Zero-based first character index |
| endOffset | <code>Number</code> | Zero-based last character index |

<a name="ParserOptions"></a>
## ParserOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| locationInfo | <code>Boolean</code> | <code>false</code> | Enables source code location information for the nodes. When enabled, each node (except root node) has `__location` property. In case the node is not an empty element, `__location` will be [ElementLocationInfo](#ElementLocationInfo) object, otherwise it's [LocationInfo](#LocationInfo). If element was implicitly created by the parser it's `__location` property will be `null`. |
| treeAdapter | <code>[TreeAdapter](#TreeAdapter)</code> | <code>parse5.treeAdapters.default</code> | Specifies resulting tree format. |

<a name="SerializerOptions"></a>
## SerializerOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| treeAdapter | <code>[TreeAdapter](#TreeAdapter)</code> | <code>parse5.treeAdapters.default</code> | Specifies input tree format. |

<a name="SAXParserOptions"></a>
## SAXParserOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| locationInfo | <code>Boolean</code> | <code>false</code> | Enables source code location information for the tokens. When enabled, each token event handler will receive [LocationInfo](#LocationInfo) object as the last argument. |

<a name="TreeAdapter"></a>
## TreeAdapter : <code>Object</code>
**Kind**: global typedef  

* [TreeAdapter](#TreeAdapter) : <code>Object</code>
  * [.createDocument()](#TreeAdapter.createDocument) ⇒ <code>ASTNode.&lt;Document&gt;</code>
  * [.createDocumentFragment()](#TreeAdapter.createDocumentFragment) ⇒ <code>ASTNode.&lt;DocumentFragment&gt;</code>
  * [.createElement(tagName, namespaceURI, attrs)](#TreeAdapter.createElement) ⇒ <code>ASTNode.&lt;Element&gt;</code>
  * [.createElement(data)](#TreeAdapter.createElement) ⇒ <code>ASTNode.&lt;CommentNode&gt;</code>
  * [.appendChild(parentNode, newNode)](#TreeAdapter.appendChild)
  * [.insertBefore(parentNode, newNode, referenceNode)](#TreeAdapter.insertBefore)
  * [.setTemplateContent(templateElement, contentTemplate)](#TreeAdapter.setTemplateContent)
  * [.getTemplateContent(templateElement)](#TreeAdapter.getTemplateContent) ⇒ <code>Boolean</code>
  * [.setDocumentType(document, name, publicId, systemId)](#TreeAdapter.setDocumentType)
  * [.setQuirksMode(document)](#TreeAdapter.setQuirksMode)
  * [.setQuirksMode(document)](#TreeAdapter.setQuirksMode) ⇒ <code>Boolean</code>
  * [.detachNode(node)](#TreeAdapter.detachNode)
  * [.insertText(parentNode, text)](#TreeAdapter.insertText)
  * [.insertTextBefore(parentNode, text, referenceNode)](#TreeAdapter.insertTextBefore)
  * [.adoptAttributes(recipientNode, attrs)](#TreeAdapter.adoptAttributes)
  * [.getFirstChild(node)](#TreeAdapter.getFirstChild) ⇒ <code>ASTNode</code>
  * [.getChildNodes(node)](#TreeAdapter.getChildNodes) ⇒ <code>Array</code>
  * [.getParentNode(node)](#TreeAdapter.getParentNode) ⇒ <code>ASTNode</code>
  * [.getAttrList(node)](#TreeAdapter.getAttrList) ⇒ <code>Array</code>
  * [.getTagName(element)](#TreeAdapter.getTagName) ⇒ <code>String</code>
  * [.getNamespaceURI(element)](#TreeAdapter.getNamespaceURI) ⇒ <code>String</code>
  * [.getTextNodeContent(textNode)](#TreeAdapter.getTextNodeContent) ⇒ <code>String</code>
  * [.getTextNodeContent(commentNode)](#TreeAdapter.getTextNodeContent) ⇒ <code>String</code>
  * [.getDocumentTypeNodeName(doctypeNode)](#TreeAdapter.getDocumentTypeNodeName) ⇒ <code>String</code>
  * [.getDocumentTypeNodePublicId(doctypeNode)](#TreeAdapter.getDocumentTypeNodePublicId) ⇒ <code>String</code>
  * [.getDocumentTypeNodeSystemId(doctypeNode)](#TreeAdapter.getDocumentTypeNodeSystemId) ⇒ <code>String</code>
  * [.isTextNode(node)](#TreeAdapter.isTextNode) ⇒ <code>Boolean</code>
  * [.isCommentNode(node)](#TreeAdapter.isCommentNode) ⇒ <code>Boolean</code>
  * [.isDocumentTypeNode(node)](#TreeAdapter.isDocumentTypeNode) ⇒ <code>Boolean</code>
  * [.isElementNode(node)](#TreeAdapter.isElementNode) ⇒ <code>Boolean</code>

<a name="TreeAdapter.createDocument"></a>
### TreeAdapter.createDocument() ⇒ <code>ASTNode.&lt;Document&gt;</code>
Creates document node

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>ASTNode.&lt;Document&gt;</code> - document  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L19)  
<a name="TreeAdapter.createDocumentFragment"></a>
### TreeAdapter.createDocumentFragment() ⇒ <code>ASTNode.&lt;DocumentFragment&gt;</code>
Creates document fragment node

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>ASTNode.&lt;DocumentFragment&gt;</code> - fragment  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L37)  
<a name="TreeAdapter.createElement"></a>
### TreeAdapter.createElement(tagName, namespaceURI, attrs) ⇒ <code>ASTNode.&lt;Element&gt;</code>
Creates element node

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>ASTNode.&lt;Element&gt;</code> - element  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L61)  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>String</code> | Tag name of the element. |
| namespaceURI | <code>String</code> | Namespace of the element. |
| attrs | <code>Array</code> | Attribute name-value pair array.                         Foreign attributes may contain `namespace` and `prefix` fields as well. |

<a name="TreeAdapter.createElement"></a>
### TreeAdapter.createElement(data) ⇒ <code>ASTNode.&lt;CommentNode&gt;</code>
Creates comment node

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>ASTNode.&lt;CommentNode&gt;</code> - comment  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L85)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | Comment text. |

<a name="TreeAdapter.appendChild"></a>
### TreeAdapter.appendChild(parentNode, newNode)
Appends child node to the given parent node.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L131)  

| Param | Type | Description |
| --- | --- | --- |
| parentNode | <code>ASTNode</code> | Parent node. |
| newNode | <code>ASTNode</code> | Child node. |

<a name="TreeAdapter.insertBefore"></a>
### TreeAdapter.insertBefore(parentNode, newNode, referenceNode)
Inserts child node to the given parent node before the given reference node.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L131)  

| Param | Type | Description |
| --- | --- | --- |
| parentNode | <code>ASTNode</code> | Parent node. |
| newNode | <code>ASTNode</code> | Child node. |
| referenceNode | <code>ASTNode</code> | Reference node. |

<a name="TreeAdapter.setTemplateContent"></a>
### TreeAdapter.setTemplateContent(templateElement, contentTemplate)
Sets <template> element content element.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L131)  

| Param | Type | Description |
| --- | --- | --- |
| templateElement | <code>ASTNode.&lt;TemplateElement&gt;</code> | <template> element. |
| contentTemplate | <code>ASTNode.&lt;DocumentFragment&gt;</code> | Content element. |

<a name="TreeAdapter.getTemplateContent"></a>
### TreeAdapter.getTemplateContent(templateElement) ⇒ <code>Boolean</code>
Returns <template> element content element.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L183)  

| Param | Type | Description |
| --- | --- | --- |
| templateElement | <code>ASTNode.&lt;DocumentFragment&gt;</code> | <template> element. |

<a name="TreeAdapter.setDocumentType"></a>
### TreeAdapter.setDocumentType(document, name, publicId, systemId)
Sets document type. If `document` already have document type node in it then
`name`, `publicId` and `systemId` properties of the node will be updated with
the provided values. Otherwise, creates new document type node with the given
properties and inserts it into `document`.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L131)  

| Param | Type | Description |
| --- | --- | --- |
| document | <code>ASTNode.&lt;Document&gt;</code> | Document node. |
| name | <code>String</code> | Document type name. |
| publicId | <code>String</code> | Document type public identifier. |
| systemId | <code>String</code> | Document type system identifier. |

<a name="TreeAdapter.setQuirksMode"></a>
### TreeAdapter.setQuirksMode(document)
Sets document quirks mode flag.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L167)  

| Param | Type | Description |
| --- | --- | --- |
| document | <code>ASTNode.&lt;Document&gt;</code> | Document node. |

<a name="TreeAdapter.setQuirksMode"></a>
### TreeAdapter.setQuirksMode(document) ⇒ <code>Boolean</code>
Determines if document quirks mode flag is set.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L183)  

| Param | Type | Description |
| --- | --- | --- |
| document | <code>ASTNode.&lt;Document&gt;</code> | Document node. |

<a name="TreeAdapter.detachNode"></a>
### TreeAdapter.detachNode(node)
Removes node from it's parent.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L197)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.insertText"></a>
### TreeAdapter.insertText(parentNode, text)
Inserts text into node. If the last child of the node is the text node then
provided text will be appended to the text node content. Otherwise, inserts
new text node with the given text.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L220)  

| Param | Type | Description |
| --- | --- | --- |
| parentNode | <code>ASTNode</code> | Node to insert text into. |
| text | <code>String</code> | Text to insert. |

<a name="TreeAdapter.insertTextBefore"></a>
### TreeAdapter.insertTextBefore(parentNode, text, referenceNode)
Inserts text into node before the referenced child node. If node before the
referenced child node is the text node then provided text will be appended
to the text node content. Otherwise, inserts new text node with the given text
before the referenced child node.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L249)  

| Param | Type | Description |
| --- | --- | --- |
| parentNode | <code>ASTNode</code> | Node to insert text into. |
| text | <code>String</code> | Text to insert. |
| referenceNode | <code>ASTNode</code> | Node to insert text before. |

<a name="TreeAdapter.adoptAttributes"></a>
### TreeAdapter.adoptAttributes(recipientNode, attrs)
Copies attributes to the given node. Only those nodes
which are not yet present in the node are copied.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L270)  

| Param | Type | Description |
| --- | --- | --- |
| recipientNode | <code>ASTNode</code> | Node to copy attributes into. |
| attrs | <code>Array</code> | Attributes to copy. |

<a name="TreeAdapter.getFirstChild"></a>
### TreeAdapter.getFirstChild(node) ⇒ <code>ASTNode</code>
Returns first child of the given node.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>ASTNode</code> - firstChild  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L297)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.getChildNodes"></a>
### TreeAdapter.getChildNodes(node) ⇒ <code>Array</code>
Returns array of the given node's children.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>Array</code> - children  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L313)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.getParentNode"></a>
### TreeAdapter.getParentNode(node) ⇒ <code>ASTNode</code>
Returns given node's parent.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>ASTNode</code> - parent  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L329)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.getAttrList"></a>
### TreeAdapter.getAttrList(node) ⇒ <code>Array</code>
Returns array of the given node's attributes in form of the name-value pair.
Foreign attributes may contain `namespace` and `prefix` fields as well.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>Array</code> - attributes  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L346)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.getTagName"></a>
### TreeAdapter.getTagName(element) ⇒ <code>String</code>
Returns given element's tag name.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>String</code> - tagName  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L364)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>ASTNode.&lt;Element&gt;</code> | Element. |

<a name="TreeAdapter.getNamespaceURI"></a>
### TreeAdapter.getNamespaceURI(element) ⇒ <code>String</code>
Returns given element's namespace.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>String</code> - namespaceURI  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L380)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>ASTNode.&lt;Element&gt;</code> | Element. |

<a name="TreeAdapter.getTextNodeContent"></a>
### TreeAdapter.getTextNodeContent(textNode) ⇒ <code>String</code>
Returns given text node's content.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>String</code> - text  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L396)  

| Param | Type | Description |
| --- | --- | --- |
| textNode | <code>ASTNode.&lt;Text&gt;</code> | Text node. |

<a name="TreeAdapter.getTextNodeContent"></a>
### TreeAdapter.getTextNodeContent(commentNode) ⇒ <code>String</code>
Returns given comment node's content.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>String</code> - commentText  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L412)  

| Param | Type | Description |
| --- | --- | --- |
| commentNode | <code>ASTNode.&lt;Comment&gt;</code> | Comment node. |

<a name="TreeAdapter.getDocumentTypeNodeName"></a>
### TreeAdapter.getDocumentTypeNodeName(doctypeNode) ⇒ <code>String</code>
Returns given document type node's name.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>String</code> - name  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L428)  

| Param | Type | Description |
| --- | --- | --- |
| doctypeNode | <code>ASTNode.&lt;DocumentType&gt;</code> | Document type node. |

<a name="TreeAdapter.getDocumentTypeNodePublicId"></a>
### TreeAdapter.getDocumentTypeNodePublicId(doctypeNode) ⇒ <code>String</code>
Returns given document type node's public identifier.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>String</code> - publicId  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L444)  

| Param | Type | Description |
| --- | --- | --- |
| doctypeNode | <code>ASTNode.&lt;DocumentType&gt;</code> | Document type node. |

<a name="TreeAdapter.getDocumentTypeNodeSystemId"></a>
### TreeAdapter.getDocumentTypeNodeSystemId(doctypeNode) ⇒ <code>String</code>
Returns given document type node's system identifier.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**Returns**: <code>String</code> - systemId  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L460)  

| Param | Type | Description |
| --- | --- | --- |
| doctypeNode | <code>ASTNode.&lt;DocumentType&gt;</code> | Document type node. |

<a name="TreeAdapter.isTextNode"></a>
### TreeAdapter.isTextNode(node) ⇒ <code>Boolean</code>
Determines if given node is a text node.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L477)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.isCommentNode"></a>
### TreeAdapter.isCommentNode(node) ⇒ <code>Boolean</code>
Determines if given node is a comment node.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L493)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.isDocumentTypeNode"></a>
### TreeAdapter.isDocumentTypeNode(node) ⇒ <code>Boolean</code>
Determines if given node is a document type node.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L509)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |

<a name="TreeAdapter.isElementNode"></a>
### TreeAdapter.isElementNode(node) ⇒ <code>Boolean</code>
Determines if given node is an element.

**Kind**: static method of <code>[TreeAdapter](#TreeAdapter)</code>  
**See**: [default implementation.](https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L525)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>ASTNode</code> | Node. |
