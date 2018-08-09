import React from 'react'
import { calculatePackagePrice, getDifferenceInDays } from '../../utils/date'

import { Col, Row } from 'react-bootstrap'
import Image from '../image'
import Rating from 'react-rating'
import { RoundedButton } from '../button'
import Dropdown from "../dropdown";

const numOfPeopleOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
]

const CheckoutFooter = ({ buttonLabel,
                          buttonType,
                          checkoutPrice,
                          currentPackage,
                          currentStep,
                          handleNumOfPeopleSelect,
                          numOfPeople,
                          onButtonClick
                        }) => {
  const differenceInDays = getDifferenceInDays(currentPackage.startDate, currentPackage.endDate)

  return (
    <Row className="package-footer">
      <Col className="package-footer-logo-container">
        <Image
          alt="Voyago Logo"
          className="package-footer-logo"
          image="logo"
          size={64}
        />
      </Col>
      <Col style={{ width: '45%'}}>
        <div className="package-footer-name">
          <div>
            { currentPackage.name }
          </div>
          <div className="package-footer-dates">
            {`${differenceInDays + 1 } Days ${differenceInDays} Nights`}
            <span className="package-footer-rating">
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating={5}
                readonly
              />
            </span>
            <span className="package-footer-rating-num">(1)</span>
          </div>
        </div>
      </Col>
      <Col className="package-footer-checkout-container">
        <div className="package-footer-checkout-btn-container">
          {
            handleNumOfPeopleSelect && (currentStep !== 0) &&
            <div className="package-footer-total-title">{`# of People: `}</div>
          }
          {
            handleNumOfPeopleSelect && (currentStep !== 0) &&
            <Dropdown
              defaultValue={numOfPeopleOptions[3]}
              handleChange={handleNumOfPeopleSelect}
              options={numOfPeopleOptions}
            />
          }
          <span className="package-footer-total-amount">
              {
                checkoutPrice ?
                  `$${Math.round(checkoutPrice)}`
                  :
                  `$${Math.round(calculatePackagePrice(currentPackage))}`

              }
            <span className="package-footer-total-per">
            /person
          </span>
        </span>
          {
            numOfPeople &&
            <Col className="package-footer-total">
              {`TOTAL: `}
            </Col>
          }
          {
            numOfPeople &&
            <span className="package-footer-total-amount">
              {
                checkoutPrice ?
                  `$${Math.round(checkoutPrice) * numOfPeople}`
                  :
                  `$${Math.round(calculatePackagePrice(currentPackage)) * numOfPeople}`
              }
        </span>
          }
          <RoundedButton
            className="top-section-btn"
            label={buttonLabel}
            linkTo={`/booking/${currentPackage.id}`}
            onClick={onButtonClick}
            style={{
              borderRadius: 3,
              fontWeight: 600,
              width: '30%',
            }}
            type={buttonType}
            uppercase
          />
        </div>
      </Col>
    </Row>
  )
}

export default CheckoutFooter
