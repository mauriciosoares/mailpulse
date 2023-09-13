import { Item, Container } from "../AnimateWhenVisible";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-100">
      <div className="mx-auto w-full lg:px-24 max-w-screen-2xl md:px-12 items-center px-8 py-20 scroll-mt-12 mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <div>
            <p className="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter">
              How it works
            </p>
            <p className="mt-4 text-lg max-w-xl mx-auto tracking-tight text-slate-500">
              Our process is designed to make your email marketing journey
              smooth and successful.
            </p>
          </div>
        </div>
        <div>
          <Container>
            <div className="mx-auto max-w-screen-2xl pt-12">
              <div className="grid gap-12 grid-cols-1 lg:space-y-0 lg:text-center md:grid-cols-4">
                <Item>
                  <div className="flex gap-4 items-center md:flex-col">
                    <div className="items-center justify-center text-accent-500 bg-slate-200 rounded-xl flex h-10 w-10 lg:mx-auto">
                      1
                    </div>
                    <div>
                      <p className="text-lg font-semibold leading-6 text-black font-display tracking-tight">
                        Submit Your Design
                      </p>
                      <div className="text-slate-500 text-sm">
                        Send us your design in any format, we're flexible!
                      </div>
                    </div>
                  </div>
                </Item>

                <Item>
                  <div className="flex gap-4 items-center md:flex-col">
                    <div className="items-center justify-center text-accent-500 bg-slate-200 rounded-xl flex h-10 w-10 lg:mx-auto">
                      2
                    </div>
                    <div>
                      <p className="text-lg font-semibold leading-6 text-black font-display tracking-tight">
                        We Work Our Magic
                      </p>
                      <div className="text-slate-500 text-sm">
                        We'll bring your design to life with meticulous coding
                      </div>
                    </div>
                  </div>
                </Item>

                <Item>
                  <div className="flex gap-4 items-center md:flex-col">
                    <div className="items-center justify-center text-accent-500 bg-slate-200 rounded-xl flex h-10 w-10 lg:mx-auto">
                      3
                    </div>
                    <div>
                      <p className="text-lg font-semibold leading-6 text-black font-display tracking-tight">
                        Review and Approval
                      </p>
                      <div className="text-slate-500 text-sm">
                        You review the email, request any necessary tweaks, and
                        approve
                      </div>
                    </div>
                  </div>
                </Item>

                <Item>
                  <div className="flex gap-4 items-center md:flex-col">
                    <div className="items-center justify-center text-accent-500 bg-slate-200 rounded-xl flex h-10 w-10 lg:mx-auto">
                      4
                    </div>
                    <div>
                      <p className="text-lg font-semibold leading-6 text-black font-display tracking-tight">
                        Ready for Action
                      </p>
                      <div className="text-slate-500 text-sm">
                        Once approved, you're all set to launch your stunning
                        email campaign
                      </div>
                    </div>
                  </div>
                </Item>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
