"use client";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="min-h-screen bg-[#1b1c1d]">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-[#2d2e2f] bg-[#1b1c1d]/95 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto p-4 flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#262627]">
              <svg
                className="w-6 h-6 text-[#208efb]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-[#fefefe]">GemChat</h1>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="max-w-4xl mx-auto pt-20 pb-24 px-4 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-3xl p-4 rounded-2xl ${
                message.role === "user"
                  ? "bg-[#262627] border border-[#363738]"
                  : "bg-[#232425] border border-[#2d2e2f]"
              }`}
            >
              <div className="text-[#fefefe] prose prose-invert max-w-none">
                {message.role === "user" ? (
                  message.content
                ) : (
                  <ReactMarkdown
                    components={{
                      h1: (props) => (
                        <h2
                          className="text-xl font-bold mt-4 mb-2"
                          {...props}
                        />
                      ),
                      h2: (props) => (
                        <h3
                          className="text-lg font-semibold mt-3 mb-1.5"
                          {...props}
                        />
                      ),
                      ul: (props) => (
                        <ul className="list-disc pl-6 my-2" {...props} />
                      ),
                      ol: (props) => (
                        <ol className="list-decimal pl-6 my-2" {...props} />
                      ),
                      li: (props) => <li className="my-1" {...props} />,
                      code: (props) => (
                        <code
                          className="bg-[#262627] px-1.5 py-0.5 rounded text-sm"
                          {...props}
                        />
                      ),
                      a: (props) => (
                        <a
                          className="text-[#208efb] hover:underline"
                          target="_blank"
                          rel="noopener"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 right-0 bg-[#1b1c1d] border-t border-[#2d2e2f]"
      >
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex gap-2 items-center">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Message GemChat..."
              className="flex-1 p-4 bg-[#262627] rounded-xl border border-[#363738] focus:outline-none focus:border-[#208efb]/30 focus:ring-2 focus:ring-[#208efb]/20 placeholder:text-[#7d7e7f] text-[#fefefe]"
            />
            <button
              type="submit"
              className="p-3 bg-[#262627] rounded-xl border border-[#363738] hover:border-[#208efb]/40 transition-colors"
            >
              <svg
                className="w-6 h-6 text-[#208efb]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
