import { useState } from "react";
import { text as dropboxText, source as dropboxSource } from "./dropbox";
import { text as githubText, source as githubSource } from "./github";
import { text as googleText, source as googleSource } from "./google";
import { text as nikeText, source as nikeSource } from "./nike";
import { text as slackText, source as slackSource } from "./slack";
import { Highlight } from "prism-react-renderer";
import clsx from "clsx";
import arrow from "./email-arrow-back.png?url";

const emails = {
  dropbox: {
    text: dropboxText,
    source: dropboxSource,
    title: "Password Change Requested",
  },
  github: {
    title: "Access Token Created",
    text: githubText,
    source: githubSource,
  },
  google: {
    title: "Developer Update",
    text: googleText,
    source: googleSource,
  },
  nike: {
    title: "Track your Package",
    text: nikeText,
    source: nikeSource,
  },
  slack: {
    title: "Confirm your email address",
    text: slackText,
    source: slackSource,
  },
};

export default function CodeEditor() {
  const [active, setVisible] = useState("preview");
  const [previewScreen, setPreviewScreen] = useState("dropbox");

  return (
    <>
      <div className="lg:mt-0 lg:flex-[1] mt-10 relative overflow-hidden shadow-xl flex sm:max-h-[none] rounded-t-xl lg:h-[34.6875rem] xl:h-[31.625rem] !h-auto max-h-[none]">
        <div className="relative w-full flex flex-col">
          <div className="flex-none text-slate-200 bg-black">
            <div className="flex">
              <button
                onClick={() => setVisible("preview")}
                className={clsx(
                  "flex-1 py-[8px] px-4 text-sm font-medium font-sans transition ease-in-out duration-200 hover:text-slate-12 text-slate-12 relative",
                  {
                    "bg-slate-700": active === "preview",
                  }
                )}
              >
                Preview
              </button>
              <button
                onClick={() => setVisible("source")}
                disabled={previewScreen === "email"}
                className={clsx(
                  "flex-1 relative py-[8px] px-4 text-sm font-medium font-sans transition ease-in-out duration-200 hover:text-slate-12 text-slate-12 disabled:bg-slate-500 disabled:text-slate-700",
                  {
                    "bg-slate-700": active === "source",
                  }
                )}
              >
                Source Code
              </button>
              <button
                onClick={() => setVisible("text")}
                disabled={previewScreen === "email"}
                className={clsx(
                  "flex-1 relative py-[8px] px-4 text-sm font-medium font-sans transition ease-in-out duration-200 hover:text-slate-12 text-slate-12 disabled:bg-slate-500 disabled:text-slate-700",
                  {
                    "bg-slate-700": active === "text",
                  }
                )}
              >
                Plain Text
              </button>
            </div>
          </div>

          {active === "text" ? (
            <pre className="h-[530px] p-4 w-full whitespace-pre-wrap overflow-y-auto">
              {emails[previewScreen]?.text}
            </pre>
          ) : null}

          {active === "preview" ? (
            <>
              {previewScreen === "email" ? (
                <div className="h-[530px]">
                  <div className="text-sm">
                    <EmailRow
                      onClick={() => setPreviewScreen("dropbox")}
                      sender="Dropbox"
                      title={emails.dropbox.title}
                      textPreview={emails.dropbox.text.substring(0, 100)}
                    />
                    <EmailRow
                      onClick={() => setPreviewScreen("github")}
                      sender="Github"
                      title={emails.github.title}
                      textPreview={emails.github.text.substring(0, 100)}
                    />
                    <EmailRow
                      onClick={() => setPreviewScreen("google")}
                      sender="Google"
                      title={emails.google.title}
                      textPreview={emails.google.text.substring(0, 100)}
                      hasLabel={false}
                    />
                    <EmailRow
                      onClick={() => setPreviewScreen("nike")}
                      sender="Nike"
                      title={emails.nike.title}
                      textPreview={emails.nike.text.substring(0, 100)}
                      hasLabel={false}
                    />
                    <EmailRow
                      onClick={() => setPreviewScreen("slack")}
                      sender="Slack"
                      title={emails.slack.title}
                      textPreview={emails.slack.text.substring(0, 100)}
                    />
                  </div>
                </div>
              ) : null}

              {previewScreen !== "email" ? (
                <div className="h-[530px] flex flex-col">
                  <div className="p-4 flex flex-col gap-3 border-b">
                    <div className="text-xl flex items-center gap-2">
                      <button onClick={() => setPreviewScreen("email")}>
                        <img src={arrow} width="20" />
                      </button>
                      <span>{emails[previewScreen]?.title}</span>
                      <img src="important-label.png" width="20" />
                      <span className="bg-slate-200 text-slate-800 px-1 py-0.5 inline-block rounded-md text-xs">
                        Inbox
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="bg-dropbox bg-github bg-google bg-nike bg-slack" />
                      <div
                        className={`w-[40px] h-[40px] bg-${previewScreen} bg-center bg-no-repeat rounded-full bg-slate-100 bg-80%`}
                      />
                      <div className="leading-none">
                        <div className="flex gap-2 items-center">
                          <div className="font-bold capitalize">
                            {previewScreen}
                          </div>
                          <div className="text-xs">
                            {"<"}no-reply@{previewScreen}.com{">"}
                          </div>
                        </div>
                        <div className="text-xs">to me</div>
                      </div>
                    </div>
                  </div>
                  <iframe
                    srcDoc={emails[previewScreen]?.source}
                    className="w-full flex-1"
                  ></iframe>
                </div>
              ) : null}
            </>
          ) : null}

          {active === "source" ? (
            <div className="relative min-h-0 flex-auto flex flex-col text-slate-200 bg-slate-900">
              <div className="w-full flex-auto flex min-h-0 overflow-auto h-[530px]">
                <div className="w-full relative flex text-sm leading-normal">
                  <Highlight
                    language="html"
                    code={emails[previewScreen]?.source}
                    theme={{
                      plain: {
                        color: "rgb(71 85 105/1)",
                        backgroundColor: "#0e1728",
                      },
                      styles: [
                        {
                          types: ["tag", "doctype", "doctype-tag"],
                          style: {
                            color: "rgb(244 114 182/1)",
                          },
                        },
                        {
                          types: ["attr-name", "deleted", "string"],
                          style: {
                            color: "rgb(203 213 225/1)",
                          },
                        },
                        {
                          types: ["attr-value"],
                          style: {
                            color: "rgb(125 211 252/1)",
                          },
                        },
                      ],
                    }}
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <pre style={style}>
                        {tokens.map((line, i) => (
                          <div key={i} {...getLineProps({ line })}>
                            <span>{i + 1}</span>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

function EmailRow({ onClick, sender, hasLabel = true, title, textPreview }) {
  return (
    <button
      className="flex p-3 items-center border-b hover:border-slate-300 hover:shadow-sm whitespace-nowrap"
      onClick={onClick}
    >
      <span className="w-[30px]">
        <img src="important-label.png" width="20" />
      </span>

      <span className="w-[120px] text-left">{sender}</span>
      <span className="flex gap-2">
        {hasLabel ? (
          <span>
            <span className="bg-fuchsia-700 text-fuchsia-100 px-1 py-0.5 inline-block rounded-md text-xs">
              Important
            </span>
          </span>
        ) : null}
        <span className="font-semibold">{title}</span>-
        <span className="text-slate-500">{textPreview}</span>
      </span>
    </button>
  );
}
