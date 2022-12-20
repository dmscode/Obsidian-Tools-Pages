import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faNoteSticky, faPaperPlane, faMugHot, faBroom } from '@fortawesome/free-solid-svg-icons'
import './QuickNote.css';

/* ======== 按钮图标 ======== */
const configIcon = <FontAwesomeIcon icon={faGear} />
const noteIcon = <FontAwesomeIcon icon={faNoteSticky} />
const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />
const coffeeIcon = <FontAwesomeIcon icon={faMugHot} />
const broomIcon = <FontAwesomeIcon icon={faBroom} />

/* ======== 默认设置 ======== */
const defaultPath = 'obsidian://advanced-uri?filepath=Logs%252F{{date}}.md'
const defaultTemplate = `---
created: {{date}} {{time}}
updated: {{date}} {{time}}
---

{{content}}`
/**
 * 数字两位化
 *
 * @param {number} num 0~99 的整数
 * @returnn {string}
 */
const dbNum = num => String(num).padStart(2, '0')

const QuickNote = () => {
  const contentEl = useRef(null)
  const [showConfig, setShowConfig] = useState(()=>!window.localStorage.getItem('QuickNotePath') || !window.localStorage.getItem('QuickNoteTemplate'))
  const [notePath, setNotePath] = useState(()=>window.localStorage.getItem('QuickNotePath') || defaultPath)
  const [template, setTemplate] = useState(()=>window.localStorage.getItem('QuickNoteTemplate') || defaultTemplate)
  const [note, setNote] = useState(()=>window.localStorage.getItem('QuickNoteContent') || '')

  useEffect(()=>{ window.localStorage.setItem('QuickNotePath', notePath) }, [notePath])
  useEffect(()=>{ window.localStorage.setItem('QuickNoteTemplate', template) }, [template])
  useEffect(()=>{ window.localStorage.setItem('QuickNoteContent', note) }, [note])

  useEffect(()=>{
    if(!showConfig) contentEl.current.focus()
  }, [showConfig])

  const sendNote = useCallback(()=>{
    const now = new Date()
    const keywords = {
      content: note,
      YYYY: now.getFullYear(),
      MM: dbNum(now.getMonth()+1),
      dd: dbNum(now.getDate()),
      HH: dbNum(now.getHours()),
      mm: dbNum(now.getMinutes()),
      ss: dbNum(now.getSeconds()),
    }
    keywords.date = `${keywords.YYYY}-${keywords.MM}-${keywords.dd}`
    keywords.time = `${keywords.HH}:${keywords.mm}:${keywords.ss}`

    const path = notePath.replace(/\{\{(\w+)\}\}/g, (m, s)=> keywords[s] || m)
    const data = template.replace(/\{\{(\w+)\}\}/g, (m, s)=> keywords[s] || m)
    window.open(`${path}&data=${encodeURIComponent(data)}&mode=append`)
  }, [note, notePath, template])
  const updatePath = useCallback((e)=>{
    const newPath = decodeURIComponent(decodeURIComponent(e.target.value.replace(/\n/, '')))
    if(newPath === notePath) return
    setNotePath(newPath)
  }, [notePath, setNotePath])
  const clearAll = useCallback(()=>{
    if(window.confirm('Clear all content ?')) setNote('')
  }, [])
  return (
    <div className="quick-note">
      {
        showConfig
        ? (
          <div className="quick-note-config">
            <div className="card">
            <label htmlFor="quick-note-path">笔记地址（Advanced URI 格式）：</label>
            <textarea
              id="quick-note-path"
              placeholder="笔记地址（Advanced URI 格式），可以使用下方变量。"
              value={notePath.replace(/(\?|&)/g, '\n$1') || ''}
              onChange={updatePath}></textarea>
            </div>
            <div className="card">
            <label htmlFor="quick-note-template">笔记模板：</label>
            <textarea
              id="quick-note-template"
              placeholder="笔记模板，可以使用下方变量。考虑到可能追加在原有笔记中，所以不建议比较复杂。"
              value={template || ''}
              onChange={e=>setTemplate(e.target.value)}></textarea>
            </div>
          </div>
        )
        : <div className="card quick-note-input">
            <textarea
              id="quick-note-content"
              ref={contentEl}
              placeholder="写下笔记，然后发送……"
              value={note || ''}
              onChange={e=>setNote(e.target.value)}></textarea>
            {(note&&note.length) && <button className="clear-all" onClick={clearAll}>{broomIcon}</button>}
          </div>
      }
      <div className="card button-group">
        <button className="toggle" onClick={()=>{setShowConfig(nowState=>!nowState)}}> {showConfig ? noteIcon : configIcon } </button>
        {
          showConfig
          ? <button className="coffee" onClick={()=>{window.open('https://afdian.net/a/daomishu', '_blank')}}>{coffeeIcon} Coffee</button>
          : <button className="send" onClick={sendNote}>Send Note {sendIcon}</button>}
      </div>
      
      {showConfig && (
        <div className="card quick-note-desc">
          <h3>使用说明：</h3>
          <p>本工具基于 <a href="https://github.com/Vinzent03/obsidian-advanced-uri">Advanced URI</a> 的 Api，故需要先安装此插件。</p>
          <p>然后在你预定的位置创建一篇笔记，复制这篇笔记的 Advanced URI ，粘贴到本工具的笔记地址栏。这样所有新添加内容都会追加到这篇笔记中。</p>
          <p>你也可以在地址中使用变量，变量的格式：<code>&#123;&#123;关键字&#125;&#125;</code>。从而实现按一定规则自动创建笔记。</p>
          <p>模板中同样可以使用变量实现 Front matter 的添加。需要注意：<strong>模板中必须用 <code>&#123;&#123;content&#125;&#125;</code> 变量来插入笔记的内容</strong>，否则就不包含你书写的笔记了哦~</p>
          <p>工具有数据自动保存和自动恢复，只是以防意外，必要过度依赖，不要使用浏览器的退出自动清除浏览数据或者隐私浏览模式。</p>
          <p>输入内容后输入框右上角有一个半透明按钮（不太明显），点击可以清空输入框。</p>
          <p><strong>可用变量关键字：</strong></p>
          <ul>
          <li><code>content</code>：你输入的笔记内容</li>
          <li><code>date</code>：2022-11-16 格式的日期</li>
          <li><code>time</code>：16:05:31 格式的时间</li>
          <li><code>YYYY</code>：年份</li>
          <li><code>MM</code>：月份</li>
          <li><code>dd</code>：日期</li>
          <li><code>HH</code>：小时</li>
          <li><code>mm</code>：分钟</li>
          <li><code>ss</code>：秒</li>
          </ul>

        </div>
      )}
    </div>
  )
};

export default QuickNote;
