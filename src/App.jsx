import { useState } from 'react'

const resumeUrl = '/assets/resume.pdf'

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const openResume = (ev) => { if (ev) ev.preventDefault(); setResumeOpen(true) }
  const closeResume = (ev) => { if (ev) ev.preventDefault(); setResumeOpen(false) }
  const stopProp = (ev) => { ev.stopPropagation() }

  return (
      <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      
        
        <header style={{ position: "sticky", top: "0", zIndex: "50", background: "rgba(255,255,255,0.82)", backdropFilter: "saturate(180%) blur(12px)", borderBottom: "1px solid #ededea" }}>
          <nav style={{ maxWidth: "1120px", margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "700", fontSize: "16px", letterSpacing: "-0.01em" }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#2f63d8", display: "inline-block" }}></span>
              주윤희<span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: "400", fontSize: "12px", color: "#9aa0a8", letterSpacing: "0" }}>.developer</span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              <a href="#about" style={{ fontSize: "14px", color: "#5a616b", fontWeight: "500" }}>About</a>
              <a href="#skills" style={{ fontSize: "14px", color: "#5a616b", fontWeight: "500" }}>Skills</a>
              <a href="#projects" style={{ fontSize: "14px", color: "#5a616b", fontWeight: "500" }}>Projects</a>
              <a href="#career" style={{ fontSize: "14px", color: "#5a616b", fontWeight: "500" }}>Career</a>
              <a href="#certs" style={{ fontSize: "14px", color: "#5a616b", fontWeight: "500" }}>자격증</a>
              <a href="#contact" style={{ fontSize: "14px", color: "#5a616b", fontWeight: "500" }}>Contact</a>
              <a href="https://github.com/vjyh1010v-boop" target="_blank" rel="noopener" aria-label="GitHub" style={{ display: "inline-flex", alignItems: "center", color: "#5a616b" }}><svg width="19" height="19" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
              <a href="/assets/resume.pdf" onClick={openResume} style={{ fontSize: "13.5px", fontWeight: "600", color: "#fff", background: "#15171c", padding: "9px 16px", borderRadius: "8px", cursor: "pointer" }}>이력서</a>
            </div>
          </nav>
        </header>
      
        <main id="top" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 32px" }}>
      
          
          <section style={{ padding: "120px 0 110px", borderBottom: "1px solid #ededea" }}>
            <p data-reveal="" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", letterSpacing: "0.08em", color: "#2f63d8", marginBottom: "28px" }}>BACKEND · DATA DEVELOPER</p>
            <h1 data-reveal="" style={{ fontSize: "76px", lineHeight: "1.04", letterSpacing: "-0.035em", fontWeight: "800", marginBottom: "30px" }}>데이터로 질문을<br />이해하고 답을 찾습니다.</h1>
            <p data-reveal="" style={{ fontSize: "19px", lineHeight: "1.7", color: "#5a616b", maxWidth: "620px", fontWeight: "400" }}>범죄심리학·법률 실무에서 사람과 사건의 맥락을 찾아온 경험을, 이제 데이터와 코드로 풀어내는 개발자 <b style={{ color: "#15171c", fontWeight: "600" }}>주윤희</b>입니다.</p>
            <div data-reveal="" style={{ display: "flex", gap: "14px", marginTop: "42px" }}>
              <a href="#projects" style={{ fontSize: "15px", fontWeight: "600", color: "#fff", background: "#15171c", padding: "13px 24px", borderRadius: "9px" }}>프로젝트 보기</a>
              <a href="#contact" style={{ fontSize: "15px", fontWeight: "600", color: "#15171c", background: "#fff", border: "1px solid #d9dbd8", padding: "13px 24px", borderRadius: "9px" }}>연락하기</a>
            </div>
            <div data-reveal="" style={{ display: "flex", gap: "40px", marginTop: "64px", flexWrap: "wrap" }}>
              <div><div style={{ fontSize: "34px", fontWeight: "800", letterSpacing: "-0.02em" }}>6<span style={{ fontSize: "18px", color: "#9aa0a8" }}>년+</span></div><div style={{ fontSize: "13px", color: "#828891", marginTop: "4px" }}>법률 실무 경력</div></div>
              <div style={{ width: "1px", background: "#ededea" }}></div>
              <div><div style={{ fontSize: "34px", fontWeight: "800", letterSpacing: "-0.02em" }}>12<span style={{ fontSize: "18px", color: "#9aa0a8" }}>+</span></div><div style={{ fontSize: "13px", color: "#828891", marginTop: "4px" }}>기술 · 툴</div></div>
              <div style={{ width: "1px", background: "#ededea" }}></div>
              <div><div style={{ fontSize: "34px", fontWeight: "800", letterSpacing: "-0.02em" }}>4</div><div style={{ fontSize: "13px", color: "#828891", marginTop: "4px" }}>대표 프로젝트</div></div>
            </div>
          </section>
      
          
          <section id="about" style={{ padding: "100px 0", borderBottom: "1px solid #ededea" }}>
            <div style={{ display: "grid", gridTemplateColumns: "230px 1fr", gap: "60px" }}>
              <div data-reveal="">
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#9aa0a8", letterSpacing: "0.06em" }}>01 / ABOUT</p>
                <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", marginTop: "14px" }}>소개</h2>
              </div>
              <div data-reveal="" style={{ maxWidth: "640px" }}>
                <p style={{ fontSize: "21px", lineHeight: "1.65", fontWeight: "500", letterSpacing: "-0.01em", marginBottom: "28px" }}>‘왜 이런 일이 일어났는가’를 묻는 일에서, ‘데이터가 무엇을 말하는가’를 묻는 일로 옮겨왔습니다.</p>
                <p style={{ fontSize: "16px", lineHeight: "1.85", color: "#5a616b", marginBottom: "18px" }}>경찰범죄심리학을 전공하고 법무사사무소와 법무법인에서 약 7년간 민사·가사·형사·부동산·등기 실무를 다뤘습니다. 수많은 사건 서류와 절차 속에서 패턴을 찾고, 복잡한 맥락을 구조화하는 일을 반복했습니다.</p>
                <p style={{ fontSize: "16px", lineHeight: "1.85", color: "#5a616b" }}>그 과정이 자연스럽게 데이터로 이어졌습니다. 현재 ‘빅데이터 기반 자바 개발자’ 취업연계 과정을 수강하며 Python·SQL로 데이터를 다루고 Java·Spring Boot·React로 서비스를 만들고 있습니다. 수료를 앞두고 함께할 팀을 찾는 중입니다.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "34px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#3a4250", background: "#f4f5f3", padding: "7px 13px", borderRadius: "7px" }}>전공 · 경찰범죄심리학</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#3a4250", background: "#f4f5f3", padding: "7px 13px", borderRadius: "7px" }}>학사 · 경찰학</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#3a4250", background: "#f4f5f3", padding: "7px 13px", borderRadius: "7px" }}>기반 · 법률 실무 6년 9개월</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#2f63d8", background: "#eef3fd", padding: "7px 13px", borderRadius: "7px" }}>현재 · '빅데이터 기반 자바 개발자' 과정</span>
                </div>
              </div>
            </div>
          </section>
      
          
          <section id="skills" style={{ padding: "100px 0", borderBottom: "1px solid #ededea" }}>
            <div data-reveal="" style={{ marginBottom: "54px" }}>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#9aa0a8", letterSpacing: "0.06em" }}>02 / SKILLS</p>
              <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", marginTop: "14px" }}>기술 스택</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "24px" }}>
              <div data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "14px", padding: "28px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#2f63d8", letterSpacing: "0.05em", marginBottom: "18px" }}>LANGUAGES</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>Python</span><span style={{ fontSize: "13px", color: "#9aa0a8", fontFamily: "'JetBrains Mono',monospace" }}>데이터·분석</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>Java</span><span style={{ fontSize: "13px", color: "#9aa0a8", fontFamily: "'JetBrains Mono',monospace" }}>서버</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>JavaScript</span><span style={{ fontSize: "13px", color: "#9aa0a8", fontFamily: "'JetBrains Mono',monospace" }}>웹</span></div>
                </div>
              </div>
              <div data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "14px", padding: "28px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#2f63d8", letterSpacing: "0.05em", marginBottom: "18px" }}>BACKEND · INFRA</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>Spring Boot</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>SQL</span><span style={{ fontSize: "13px", color: "#9aa0a8", fontFamily: "'JetBrains Mono',monospace" }}>MySQL · Oracle</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>Docker</span></div>
                </div>
              </div>
              <div data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "14px", padding: "28px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#2f63d8", letterSpacing: "0.05em", marginBottom: "18px" }}>FRONTEND</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>React</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>JavaScript</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>CSS</span></div>
                </div>
              </div>
              <div data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "14px", padding: "28px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#2f63d8", letterSpacing: "0.05em", marginBottom: "18px" }}>TOOLS · ENV</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>VS Code</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>Jupyter Lab</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>DBeaver</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#15171c", display: "inline-block" }}></span><span style={{ fontSize: "16px", fontWeight: "600" }}>Antigravity IDE</span></div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section id="projects" style={{ padding: "100px 0", borderBottom: "1px solid #ededea" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "54px" }}>
              <div>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#9aa0a8", letterSpacing: "0.06em" }}>03 / PROJECTS</p>
                <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", marginTop: "14px" }}>대표 프로젝트</h2>
              </div>
              <p style={{ fontSize: "13.5px", color: "#9aa0a8", fontFamily: "'JetBrains Mono',monospace" }}>04 selected works</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
      
              <article data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
                <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "#f4f5f3" }}>
                  <img src="/assets/project-movie.png" alt="영화 데이터 대시보드" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
                <div style={{ padding: "26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#2f63d8" }}>01</span><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa0a8" }}>DATA · VIZ</span></div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.015em", marginBottom: "10px" }}>영화 데이터 대시보드</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#5a616b", marginBottom: "18px" }}>영화 데이터를 수집해 장르·평점·흥행 추이를 한눈에 보는 대시보드. ‘빅데이터 기반 자바 개발자’ 과정에서 팀프로젝트로 제작했습니다.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>Java</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>Spring Boot</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>JavaScript</span></div>
                  <a href="https://github.com/mainug/data-miniproject" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "18px", fontSize: "13.5px", fontWeight: "600", color: "#15171c" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    GitHub →
                  </a>
                </div>
              </article>
      
              <article data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
                <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "#f4f5f3" }}>
                  <img src="/assets/project-market.png" alt="중고거래 마켓 웹앱" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
                <div style={{ padding: "26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#2f63d8" }}>02</span><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa0a8" }}>FULL-STACK</span></div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.015em", marginBottom: "10px" }}>중고거래 마켓 웹앱</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#5a616b", marginBottom: "18px" }}>회원·상품 등록, 검색, 거래까지 흐름을 구현한 중고거래 마켓 웹앱. '빅데이터 기반 자바개발자' 과정에서 팀프로젝트로 개발했습니다.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>Spring Boot</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>React</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>MySQL</span></div>
                  <a href="https://github.com/mainug/java-miniproject-2026" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "18px", fontSize: "13.5px", fontWeight: "600", color: "#15171c" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    GitHub →
                  </a>
                </div>
              </article>
      
              <article data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
                <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "#f4f5f3" }}>
                  <img src="/assets/project-travel.jpg" alt="나의 여행 발자취" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
                <div style={{ padding: "26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#2f63d8" }}>03</span><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa0a8" }}>WEB · 기록</span></div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.015em", marginBottom: "10px" }}>나의 여행 발자취</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#5a616b", marginBottom: "18px" }}>다녀온 여행지를 지도와 기록으로 남기는 개인 취미 일기 웹앱 프로젝트. '빅데이터 기반 자바개발자' 과정에서 팀프로젝트로 제작했습니다. 추가로 개발 예정입니다.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>React</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>JavaScript</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>CSS</span></div>
                  <a href="https://github.com/vjyh1010v-boop/toyproject" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "18px", fontSize: "13.5px", fontWeight: "600", color: "#15171c" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    GitHub →
                  </a>
                </div>
              </article>
      
              <article data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
                <div style={{ aspectRatio: "16/10", backgroundColor: "#f4f5f3", backgroundImage: "repeating-linear-gradient(135deg,#eceee9 0 12px,#f4f5f3 12px 24px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#a7adb3" }}>[ project screenshot ]</span>
                </div>
                <div style={{ padding: "26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#2f63d8" }}>04</span><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa0a8" }}>DATA</span><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", color: "#b1791f", background: "#fbf1dd", padding: "3px 8px", borderRadius: "5px" }}>준비 중</span></div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.015em", marginBottom: "10px" }}>사건 데이터 분석 대시보드 (추후예정)</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#5a616b", marginBottom: "18px" }}>법무 실무 도메인 지식을 살려 사건 데이터를 분석할 대시보드. 데이터 확보 후 내용을 채워 공개할 예정입니다.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>Python</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>SQL</span><span style={{ fontSize: "12px", color: "#3a4250", background: "#f4f5f3", padding: "5px 11px", borderRadius: "6px", fontFamily: "'JetBrains Mono',monospace" }}>Pandas</span></div>
                </div>
              </article>
      
            </div>
          </section>
      
          
          <section id="career" style={{ padding: "100px 0", borderBottom: "1px solid #ededea" }}>
            <div data-reveal="" style={{ marginBottom: "54px" }}>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#9aa0a8", letterSpacing: "0.06em" }}>04 / CAREER</p>
              <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", marginTop: "14px" }}>경력 · 사회경험</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "230px 1fr", gap: "60px" }}>
              <p data-reveal="" style={{ fontSize: "15px", lineHeight: "1.8", color: "#5a616b" }}>법률 실무 6년 9개월과 대학 재학 중 국가근로장학 경험, 그리고 데이터·개발로의 전환까지 이어진 흐름입니다.</p>
              <div data-reveal="" style={{ borderLeft: "2px solid #ededea", paddingLeft: "34px", display: "flex", flexDirection: "column", gap: "42px" }}>
      
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-43px", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: "#2f63d8", border: "3px solid #fff", boxShadow: "0 0 0 1px #2f63d8" }}></span>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#2f63d8", marginBottom: "8px" }}>2026.02 – 현재</div>
                  <h3 style={{ fontSize: "18.5px", fontWeight: "700", marginBottom: "6px" }}>데이터 · 자바 개발자로 전환</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#5a616b" }}>국립부경대학교의 '빅데이터 기반 자바 개발자' 6개월 취업연계 과정 수료. Python·SQL 데이터 분석과 Java·Spring Boot·React 등을 활용한 프로젝트를 진행하며 수료 후 취업 예정.</p>
                </div>
      
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-42px", top: "6px", width: "12px", height: "12px", borderRadius: "50%", background: "#fff", border: "2px solid #c4c8cd" }}></span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#9aa0a8" }}>2025.09 – 2026.02</span></div>
                  <h3 style={{ fontSize: "18.5px", fontWeight: "700", marginBottom: "6px" }}>국립부경대학교 교육혁신처</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#5a616b" }}>국가근로장학. 출입 손님 응대 및 안내, 문서 작업 정리 및 서류 파쇄 등 행정 보조 업무 수행.</p>
                </div>
      
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-42px", top: "6px", width: "12px", height: "12px", borderRadius: "50%", background: "#fff", border: "2px solid #c4c8cd" }}></span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#9aa0a8" }}>2025.07 – 2025.08</span></div>
                  <h3 style={{ fontSize: "18.5px", fontWeight: "700", marginBottom: "6px" }}>김해공항출입국 외국인사무소</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#5a616b" }}>국가근로장학. 출·입국 외국인 관련 행정 보조 업무 수행.</p>
                </div>
      
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-42px", top: "6px", width: "12px", height: "12px", borderRadius: "50%", background: "#fff", border: "2px solid #c4c8cd" }}></span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#9aa0a8" }}>2024.09 – 2025.02</span></div>
                  <h3 style={{ fontSize: "18.5px", fontWeight: "700", marginBottom: "6px" }}>국립부경대학교 산학협력단 학술진흥부</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#5a616b" }}>국가근로장학. 출입 손님 응대 및 안내, 문서 작업 정리 및 서류 파쇄, 우편물 관리 등 학술 진흥 행정 보조 업무 수행.</p>
                </div>
      
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-42px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "#fff", border: "2px solid #c4c8cd" }}></span>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#9aa0a8", marginBottom: "8px" }}>학력</div>
                  <h3 style={{ fontSize: "18.5px", fontWeight: "700", marginBottom: "6px" }}>국립부경대학교 경찰학 학사 · 경찰범죄심리학 전공</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#5a616b" }}>로엘법무법인 재직 중 합격해 학업을 병행했고, 2022년 퇴사 후 학위 과정을 이어갔습니다.</p>
                </div>
      
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-42px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "#fff", border: "2px solid #c4c8cd" }}></span>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#9aa0a8", marginBottom: "8px" }}>2019.08 – 2022.04 · 2년 9개월</div>
                  <h3 style={{ fontSize: "18.5px", fontWeight: "700", marginBottom: "6px" }}>로엘법무법인 · 대리</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#5a616b" }}>민가사·형사 송무팀(주임·대리). 가사(이혼·상간 소송 전담), 형사(사기·횡령·배임·특경법), 부동산·법인 등기, 전자소송·우편 송수신 관리, 합의 미팅 동행(합의 유도), 공공기관(법원·검찰·경찰) 방문 서류 발급·접수, 압류·공탁 업무.</p>
                </div>
      
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-42px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "#fff", border: "2px solid #c4c8cd" }}></span>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#9aa0a8", marginBottom: "8px" }}>2015.07 – 2019.06 · 4년</div>
                  <h3 style={{ fontSize: "18.5px", fontWeight: "700", marginBottom: "6px" }}>법무사손희상사무소 · 주임</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#5a616b" }}>민사·가사, 부동산, 민사신청, 공탁 분야 실무. 의뢰인 응대 및 전화 상담, 서류 발급·접수, 소송문건 정리. 반복되는 절차 속에서 패턴을 찾고 효율화하는 데 집중.</p>
                </div>
      
              </div>
            </div>
          </section>
      
          
          <section id="certs" style={{ padding: "100px 0", borderBottom: "1px solid #ededea" }}>
            <div data-reveal="" style={{ marginBottom: "54px" }}>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#9aa0a8", letterSpacing: "0.06em" }}>05 / CERTIFICATES</p>
              <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", marginTop: "14px" }}>자격증</h2>
            </div>
            <div data-reveal="" style={{ border: "1px solid #ededea", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 180px", padding: "14px 28px", background: "#f9f9f8", borderBottom: "1px solid #ededea" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#9aa0a8", letterSpacing: "0.04em" }}>취득일</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#9aa0a8", letterSpacing: "0.04em" }}>자격명</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#9aa0a8", letterSpacing: "0.04em" }}>발행기관</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 180px", padding: "20px 28px", borderBottom: "1px solid #f2f2f0", alignItems: "center" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", color: "#9aa0a8" }}>2026.01</span>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>자동차운전면허 <span style={{ fontWeight: "400", fontSize: "13.5px", color: "#828891" }}>1종 보통</span></span>
                <span style={{ fontSize: "14px", color: "#5a616b" }}>부산광역시경찰청</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 180px", padding: "20px 28px", borderBottom: "1px solid #f2f2f0", alignItems: "center" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", color: "#9aa0a8" }}>2024.12</span>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>탐정 <span style={{ fontWeight: "400", fontSize: "13.5px", color: "#828891" }}>전문가</span></span>
                <span style={{ fontSize: "14px", color: "#5a616b" }}>대한경호학회</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 180px", padding: "20px 28px", borderBottom: "1px solid #f2f2f0", alignItems: "center" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", color: "#9aa0a8" }}>2023.04</span>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>한국사능력검정시험 <span style={{ fontWeight: "400", fontSize: "13.5px", color: "#828891" }}>1급</span></span>
                <span style={{ fontSize: "14px", color: "#5a616b" }}>국사편찬위원회</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 180px", padding: "20px 28px", borderBottom: "1px solid #f2f2f0", alignItems: "center" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", color: "#9aa0a8" }}>2015.07</span>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>정보기기운용기능사</span>
                <span style={{ fontSize: "14px", color: "#5a616b" }}>한국산업인력공단</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 180px", padding: "20px 28px", alignItems: "center" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", color: "#9aa0a8" }}>2014.12</span>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>전산회계 <span style={{ fontWeight: "400", fontSize: "13.5px", color: "#828891" }}>2급</span></span>
                <span style={{ fontSize: "14px", color: "#5a616b" }}>한국세무사회</span>
              </div>
            </div>
          </section>
      
          
          <section id="contact" style={{ padding: "110px 0 100px" }}>
            <div id="resume" style={{ background: "#15171c", borderRadius: "22px", padding: "72px 64px", color: "#fff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle,#2f63d8 0%,transparent 70%)", opacity: "0.35" }}></div>
              <p data-reveal="" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#7e94c8", letterSpacing: "0.06em", position: "relative" }}>06 / CONTACT</p>
              <h2 data-reveal="" style={{ fontSize: "46px", fontWeight: "800", letterSpacing: "-0.03em", marginTop: "18px", lineHeight: "1.1", position: "relative" }}>함께 만들 기회를<br />기다리고 있습니다.</h2>
              <p data-reveal="" style={{ fontSize: "16.5px", lineHeight: "1.7", color: "#aeb4be", maxWidth: "520px", marginTop: "22px", position: "relative" }}>데이터·AI 또는 풀스택 포지션, 협업 제안 모두 환영합니다. 편하게 연락 주세요.</p>
              <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "40px", position: "relative" }}>
                <a href="mailto:vjyh1010v@naver.com" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "15.5px", fontWeight: "600", color: "#15171c", background: "#fff", padding: "15px 26px", borderRadius: "11px" }}>
                  ✉ vjyh1010v@naver.com
                </a>
                <a href="/assets/resume.pdf" onClick={openResume} style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "15.5px", fontWeight: "600", color: "#fff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", padding: "15px 26px", borderRadius: "11px", cursor: "pointer" }}>
                  ↓ 이력서 보기
                </a>
              </div>
            </div>
          </section>
      
        </main>
      
        
        <footer style={{ borderTop: "1px solid #ededea" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ fontWeight: "700", fontSize: "15px" }}>주윤희<span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: "400", fontSize: "12px", color: "#9aa0a8" }}>.developer</span></div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#9aa0a8" }}>© 2026 · Data / AI Developer Portfolio</div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <a href="https://github.com/vjyh1010v-boop" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "13.5px", color: "#5a616b", fontWeight: "500" }}><svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>GitHub</a>
              <a href="mailto:vjyh1010v@naver.com" style={{ fontSize: "13.5px", color: "#5a616b", fontWeight: "500" }}>vjyh1010v@naver.com</a>
            </div>
          </div>
        </footer>
      
        
        {resumeOpen && (
          <div onClick={closeResume} style={{ position: "fixed", inset: "0", zIndex: "100", background: "rgba(20,23,28,0.62)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px" }}>
            <div onClick={stopProp} style={{ background: "#fff", borderRadius: "16px", width: "min(880px,100%)", height: "90vh", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #ededea", flexShrink: "0" }}>
                <span style={{ fontWeight: "700", fontSize: "16px" }}>주윤희 · 이력서</span>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <a href={resumeUrl} download="주윤희_이력서.pdf" style={{ fontSize: "13.5px", fontWeight: "600", color: "#fff", background: "#15171c", padding: "8px 16px", borderRadius: "8px" }}>↓ 다운로드</a>
                  <button onClick={closeResume} aria-label="닫기" style={{ width: "34px", height: "34px", border: "1px solid #e2e2df", background: "#fff", borderRadius: "8px", cursor: "pointer", fontSize: "16px", color: "#5a616b", lineHeight: "1" }}>✕</button>
                </div>
              </div>
              <iframe src={resumeUrl} title="주윤희 이력서" style={{ flex: "1", width: "100%", border: "0", background: "#f4f5f3" }}></iframe>
            </div>
          </div>
        )}
      
      </div>
  )
}
