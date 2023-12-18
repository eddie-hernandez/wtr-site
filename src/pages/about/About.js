import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './About.css'

export default function About() {
  function renderCustomPrevArrow(onClickHandler, hasPrev, label) {
    if (!hasPrev) {
      return (
        <h1 className="carousel-arrow carousel-arrow-left arrow-disabled">
          {'<'}
        </h1>
      )
    }
    return (
      <h1
        onClick={onClickHandler}
        className="carousel-arrow carousel-arrow-left"
      >
        {'<'}
      </h1>
    )
  }

  function renderCustomNextArrow(onClickHandler, hasNext, label) {
    if (!hasNext) {
      return (
        <h1 className="carousel-arrow carousel-arrow-right arrow-disabled">
          {'>'}
        </h1>
      )
    }
    return (
      <h1
        onClick={onClickHandler}
        className="carousel-arrow carousel-arrow-right"
      >
        {'>'}
      </h1>
    )
  }

  return (
    <div className="pageContainer" id="aboutpg">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={renderCustomPrevArrow}
        renderArrowNext={renderCustomNextArrow}
      >
        <div className="aboutSlideContainer">
          {/* SLIDE 1 */}
          <div className="aboutSlideContent" id="slide1">
            <div className="aboutSlideTitle">
              <h1>
                Who are <br />
                we?
              </h1>
            </div>
            <div className="aboutSlideInfo" />
            <div className="aboutSlideBottomContainer">
              <div className="aboutSlideDividerWrapper">
                <div className="aboutSlideDividerContainer">
                  <div className="aboutSlideDividerLine" />
                  <div className="aboutSlideDividerPoint" />
                </div>
              </div>
              <div className="aboutSlideFooter">
                <div className="aboutSlideInfo">
                  <h4>
                    ABOUT US, <i>THE TAX RESISTANCE COLLECTIVE</i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSlideContainer">
          {/* SLIDE 2 */}
          <div className="aboutSlideContent">
            <div className="aboutSlideTitle">
              <h1>We are</h1>
            </div>
            <div className="aboutSlideInfo">
              <h4>concerned citizens of “US“-bombed or trafficked ancestry.</h4>
              <h4>
                we are still self-educating on this topic, and we know this
                topic has been getting more attention lately.
              </h4>
              <h4>
                we hope to link with others interested in learning about and
                participating in this action.
              </h4>
            </div>
            <div className="aboutSlideBottomContainer">
              <div className="aboutSlideDividerWrapper">
                <div className="aboutSlideDividerContainer">
                  <div className="aboutSlideDividerLine" />
                  <div className="aboutSlideDividerPoint" />
                </div>
              </div>
              <div className="aboutSlideFooter">
                <div className="aboutSlidePage">
                  <h3>01</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSlideContainer">
          {/* SLIDE 3 */}
          <div className="aboutSlideContent">
            <div className="aboutSlideTitle">
              <h1>We know</h1>
            </div>
            <div className="aboutSlideInfo">
              <h4>
                that $1 of tax paid does not equal $1 given to the military.
              </h4>
              <h4>
                The way the military is funded is intentionally kept opaque in
                order to discourage resistance.
                <span style={{ color: 'red' }}>*</span>
              </h4>
              <h4>
                The point of tax resistance is to show discontent in their
                language: <span style={{ color: '#39FF14' }}>MONEY</span>.
              </h4>
            </div>
            <div className="aboutSlideBottomContainer">
              <div className="aboutSlideDividerWrapper">
                <div className="aboutSlideDividerContainer">
                  <div className="aboutSlideDividerLine" />
                  <div className="aboutSlideDividerPoint" />
                </div>
              </div>
              <div className="aboutSlideFooter">
                <div className="aboutSlidePage">
                  <h3>02</h3>
                </div>
                <div className="aboutSlideFootnote">
                  <h6>
                    <span style={{ color: 'red' }}>*</span>The Fed intentionally
                    obscures how much is spent on the military, and the 15-22%
                    budgeted for “defense” does not include military spending
                    that is hidden in other budgets (eg. nuclear weapons
                    development as a part of the Dept of Energy budget, interest
                    on national debt created by the military).(1){' '}
                  </h6>
                  <h6>
                    Regardless, about 50% of our federal income taxes goes to
                    the military budget, and Biden has been trying to increase
                    this.(2)
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSlideContainer">
          {/* SLIDE 4 */}
          <div className="aboutSlideContent" id="slide4">
            <div className="aboutSlideTitle" id="slide4">
              <h1>Big companies and the rich are already tax striking</h1>
            </div>
            <div className="aboutSlideInfo">
              <h4>
                The wealthy have always found ways to avoid paying their income
                taxes.
              </h4>
              <h4>
                Thanks to republicans and the defunding of the IRS, there is
                even less capacity to persecute tax evaders.
                <span style={{ color: 'red' }}>*</span>
              </h4>
            </div>
            <div className="aboutSlideBottomContainer">
              <div className="aboutSlideDividerWrapper">
                <div className="aboutSlideDividerContainer">
                  <div className="aboutSlideDividerLine" />
                  <div className="aboutSlideDividerPoint" />
                </div>
              </div>
              <div className="aboutSlideFooter">
                <div className="aboutSlidePage">
                  <h3>03</h3>
                </div>
                <div className="aboutSlideFootnote">
                  <h6>*source3</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSlideContainer">
          {/* SLIDE 5 */}
          <div className="aboutSlideContent" id="slide5">
            <div className="aboutSlideTitle" />
            <div className="aboutSlideInfo">
              <h4>
                We want to use{' '}
                <span style={{ color: 'red' }}>everything in our power</span> to
                show our{' '}
                <span style={{ color: 'red' }}>collective dissent</span> to the{' '}
                <span style={{ color: 'red' }}>
                  government's support and funding of genocide
                </span>{' '}
                in Palestine, the Congo, Sudan, etc, and here on Turtle Island.
              </h4>
              <h4>
                We strive to wield with precision and courage the power we hold
                as constituents of the so-called “United States“ towards the
                sovereignty of all indigenous peoples and the end of the “US“
                war machine.
              </h4>
            </div>
            <div className="aboutSlideBottomContainer">
              <div className="aboutSlideDividerWrapper">
                <div className="aboutSlideDividerContainer">
                  <div className="aboutSlideDividerLine" />
                  <div className="aboutSlideDividerPoint" />
                </div>
              </div>
              <div className="aboutSlideFooter">
                <div className="aboutSlidePage">
                  <h3>04</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSlideContainer">
          {/* SLIDE 5 */}
          <div className="aboutSlideContent">
            <div className="aboutSlideTitle" />
            <div className="aboutSlideInfo">
              <h4 style={{ fontWeight: 'lighter' }}>
                <i>Sources</i>
              </h4>
              <h4 className="aboutSlideLink">
                1.{' '}
                <a
                  href="https://fiscaldata.treasury.gov/americas-finance-guide/federal-spending/#spending-categories"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: 'white' }}
                >
                  https://fiscaldata.treasury.gov/americas-finance-guide/federal-spending/#spending-categories
                </a>
              </h4>
              <h4 className="aboutSlideLink">
                2.{' '}
                <a
                  href="https://www.theguardian.com/us-news/2023/mar/12/biden-budget-progressives-tax-increases-pentagon-spending#:~:text=On%20the%20question%20of%20defense,bn%20since%20fiscal%20year%202022"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: 'white' }}
                >
                  https://www.theguardian.com/us-news/2023/mar/12/biden-budget-progressives-tax-increases-pentagon-spending#:~:text=On%20the%20question%20of%20defense,bn%20since%20fiscal%20year%202022
                </a>
              </h4>
              <h4 className="aboutSlideLink">
                3.{' '}
                <a
                  href="https://www.taxpayeradvocate.irs.gov/wp-content/uploads/2020/08/Most-Serious-Problems-IRS-Significantly-Underfunded.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: 'white' }}
                >
                  https://www.taxpayeradvocate.irs.gov/wp-content/uploads/2020/08/Most-Serious-Problems-IRS-Significantly-Underfunded.pdf
                </a>
              </h4>
            </div>
            <div className="aboutSlideBottomContainer">
              <div className="aboutSlideDividerWrapper">
                <div className="aboutSlideDividerContainer">
                  <div className="aboutSlideDividerLine" />
                </div>
              </div>
              <div className="aboutSlideFooter">
                <div className="aboutSlidePage">
                  <h3>05</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
