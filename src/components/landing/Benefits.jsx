import { Item, Container } from "../AnimateWhenVisible";

export default function Benefits() {
  return (
    <section id="membership-benefits">
      <div className="mx-auto w-full lg:px-24 max-w-screen-2xl md:px-12 items-center px-8 pt-20 scroll-mt-12">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div>
            <p className="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter">
              Membership Benefits
            </p>
            <p className="mt-4 text-lg max-w-xl tracking-tight text-slate-500 mx-auto">
              Perks so good you'll never need to go anywhere else for your email
              marketing development. Seriously.
            </p>
          </div>
        </div>
        <div className="mx-auto pt-12">
          <Container>
            <div className="mx-auto w-full gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-3 text-center lg:text-left ">
              <Item>
                <div className="gap-3 lg:inline-flex lg:items-center ">
                  <div className="items-center justify-center text-accent-500 bg-slate-100 rounded-xl flex h-10 w-10 m-auto">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-5 w-5"
                      name="albums-outline"
                      role="img"
                    ></ion-icon>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                    Development Board
                  </p>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Enroll in a plan and make unlimited requests for email
                  marketing development
                </p>
              </Item>
              <Item>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <div className="items-center justify-center text-accent-500 bg-slate-100 rounded-xl flex h-10 w-10 m-auto">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-5 w-5"
                      name="flash-outline"
                      role="img"
                    ></ion-icon>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                    Lightning fast delivery
                  </p>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Get your code one at a time in just a few days on average
                </p>
              </Item>
              <Item>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <div className="items-center justify-center text-accent-500 bg-slate-100 rounded-xl flex h-10 w-10 m-auto">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-5 w-5"
                      name="cash-outline"
                      role="img"
                    ></ion-icon>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                    Fixed monthly rate
                  </p>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  No surprises here! Pay the same fixed price each month
                </p>
              </Item>

              <Item>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <div className="items-center justify-center text-accent-500 bg-slate-100 rounded-xl flex h-10 w-10 m-auto">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-5 w-5"
                      name="code-slash-outline"
                      role="img"
                    ></ion-icon>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                    Top-notch quality
                  </p>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Pixel-perfect HTML, ensuring your emails are engaging,
                  responsive, and designed to convert
                </p>
              </Item>

              <Item>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <div className="items-center justify-center text-accent-500 bg-slate-100 rounded-xl flex h-10 w-10 m-auto">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-5 w-5"
                      name="analytics-outline"
                      role="img"
                    ></ion-icon>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                    Flexible and scalable
                  </p>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Scale up or down as needed, and pause or cancel at anytime
                </p>
              </Item>

              <Item>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <div className="items-center justify-center text-accent-500 bg-slate-100 rounded-xl flex h-10 w-10 m-auto">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-5 w-5"
                      name="finger-print-outline"
                      role="img"
                    ></ion-icon>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                    Unique and all yours
                  </p>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Each of your email marketings is made especially for you and
                  is 100% yours
                </p>
              </Item>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
