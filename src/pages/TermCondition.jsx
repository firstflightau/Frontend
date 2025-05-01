import React from "react";
import { Link } from "react-router-dom";

const TermCondition = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Terms & Condition
          </h1>
          <div className="">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="breadcrumb listing mb-0 flex relative">
                <li className="breadcrumb-item single-list">
                  <Link
                    to="/"
                    className=" text-base font-normal text-black capitalize font"
                  >
                    Home
                  </Link>
                </li>
                <span> &nbsp; /&nbsp; </span>
                <li
                  className=" text-base font-normal text-primary-6000 capitalize font"
                  aria-current="page"
                >
                  {/* <Link to="" className=" active"> */}
                  terms & condition
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <div className="terms-condition area section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-terms mb-30">
                <h5 className="title font-600">Refund Policy</h5>
                <p className="pera">
                  We understand that unexpected situations may lead to the
                  cancellation of a booked tour, and our customers expect a
                  refund under such circumstances. Refunds are processed by
                  First-Flight.com.au only after receiving a written
                  cancellation and are subject to various factors.
                </p>
              </div>
              <div className="single-terms mb-30">
                {/* <!--<h5 className="title font-600">Our Promise</h5>--> */}

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      All the refund requests must be submitted in writing
                      directly to the company or through the travel agents from
                      whom the bookings were made.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Refunds granted, are determined based on the cancellation
                      policy of the company as well as several factors such as
                      suppliers, third-party service providers, operators, etc.
                      The decision regarding the refund amount depends on
                      company policies.{" "}
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Approved and processed refunds will be automatically
                      credited to the bank or original mode of payment within
                      5to7 business working weeks
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Airfare is completely non-refundable and non-changeable
                      based on the airline’s policies.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      By any chance if the airline cancel the booking passengers
                      will be eligible for the full refund.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="single-terms mb-30">
                <h5 className="title font-600">Travel Insurance</h5>
                <p className="pera">
                  Traveling is fun. It is rejuvenating and the most satisfying
                  experience that anyone can do. When deciding to travel, the
                  most crucial investment a person can make is travel insurance.
                  It provides a valuable protection for both domestic and
                  international travel. At First-Flight.com.au, believe that
                  travel insurance is one of the most important requirements and
                  strongly recommend that our customers take advantage of it to
                  safeguard them selves against unforeseen risks. Adequate
                  travel insurance is a requirement outlined in your contract
                  with us, our partners, collaborators, and third parties. We
                  urge you to carefully review and understand the details to
                  ensure that your insurance covers all the risks and potential
                  losses.
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  What our Insurance covers
                </h5>
                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">Costly medical emergencies </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Cancellation by the seller of hotel or airline bookings{" "}
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Flight delays or last-minute cancellations
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">Lost luggage</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Costs of canceling, delaying, or cutting your trips short
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">When you miss a connecting flight</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">Repatriation of remains</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">Trip delays</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">Loss of passport</p>
                  </li>
                </ul>
              </div>

              <div className="single-terms mb-30">
                <p className="pera">
                  If you choose to travel without adequate insurance cover
                  neither First-Flight.com.au nor its partners or collaborators
                  are liable for any losses arising due to all these unforeseen
                  conditions which would otherwise have been available if you
                  are insured.{" "}
                </p>
              </div>
              <div className="single-terms mb-30">
                <h5 className="title font-600">Cancellation Policy</h5>
                <p className="pera">
                  After booking with Flrts-Flight.com.au, customer scan amend,
                  change, or cancel their bookings, services, holiday packages,
                  or products. In case of cancellation due to unavoidable
                  circumstances, they must inform us in writing and are subject
                  to various factors.
                </p>
              </div>
              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  Flight or Holiday Cancellation Policy
                </h5>

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      The First-Flight.com.au accepts cancellation request only
                      after getting a written notification from the lead
                      traveler required by travel partners such as airlines.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      In certain travel or holiday arrangements, a refund is
                      subject to a cancellation penalty per person or booking
                      imposed by the airline or consolidator.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      The First-Flight.com.au will charge its per-person
                      admission fee or any other fee already specified in the
                      travel document.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Certain travel or holiday arrangements follow a
                      non-refundable policy.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Refunds will be given to the named person on the booking
                      payment receipt.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      The final decision of any refund is at the discretion of
                      the applicable airline or the policies of our partners.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Any refund will take at least 6-8 weeks to process. When
                      an airline, our partners, or third parties return the due
                      amount to us, we reserve the right to return the amount to
                      our customers after deducting our administrative fee and
                      other applicable charges.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Under certain circumstances, customers are entitled to
                      refunds or compensations from the respective airlines
                      under EU law, available from respective airlines.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      All tickets booked online are non-changeable and
                      non-refundable unless specified.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Under certain situations, if the refund amount is less
                      than the specified administrative fee or the recoverable
                      tax component of a non-refundable flight ticket is less
                      than the above administrative fee, then the ticket will be
                      deemed to be fully non-refundable
                    </p>
                  </li>
                </ul>
              </div>
              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  Cancellations made by customers
                </h5>
                <p className="pera">
                  Customers may cancel their travel package or travel contract
                  anytime due to unavoidable or extraordinary circumstances
                  under the following conditions: -{" "}
                </p>
              </div>

              <div className="single-terms mb-30">
                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Customers can terminate their travel package or contract
                      at any time before the start of the tour without paying a
                      cancellation charge under unavoidable or extraordinary
                      circumstances.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      The extraordinary or unavoidable circumstances include
                      warfare, a security problem such as terrorism, weather
                      conditions, natural disasters, outbreaks of disease at the
                      travel destination, or its immediate vicinity. In such a
                      scenario, firstflight.com.au will provide a full refund
                      but is not liable to pay any additional compensation.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">Cancellation Conditions</h5>

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      At First-Flight.com.au, we will not cancel any package
                      holiday less than 70 days before the departure date. We do
                      this if the events are beyond our control or due to
                      failure to pay the final balance.{" "}
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We may cancel the holiday package before a date if the
                      minimum number of clients required for a particular travel
                      package or arrangement is not reached If we need to make
                      any significant change or cancel a particular thing from
                      your package, we will inform you as soon as possible, and
                      if there is a time to do so before departure we offer you
                      a choice like: -
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Whether you accept significant changes or changed
                      arrangements.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">Refund your paid amount.</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      If available, we offer an alternative tour package and
                      will refund any price difference if the alternative is of
                      a lower value.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Customers must notify their choice within 7days of our
                      offer and if we do not hear within 7 days we will contact
                      you again if we do not get any response we will assume
                      that you have chosen to accept the change or alternative
                      booking arrangements.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">Cancellations Charges</h5>
                <p className="pera">
                  If you or any group member decides to cancel the booking after
                  confirmation, the first named person on the booking must email
                  us or send a written notice to our office. If in any case,
                  more than one member of a group cancels the tour, then it may
                  increase the per-person holiday price of the group and they
                  are liable to pay these increased expenses.{" "}
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  The cancellation charges are: -
                </h5>

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      If the period before departure in which you notify us is
                      more than 70 days, then there will be only a loss of
                      deposit.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      If the period before departure in which you notify us is
                      from 70 to 42 days, then the cancellation charges are 35%
                      of the holiday cost.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      If the period before departure in which you notify us is
                      from 42 to 31 days, then the cancellation charges are 70%
                      of the holiday cost.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      If the period before departure in which you notify us is
                      less than 30 days, then the cancellation charges are 100%
                      of the holiday cost.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">Please note: - </h5>
                <p className="pera">
                  There will be no amendments to a few arrangements after
                  confirmation. Any alteration or cancellation could incur a
                  cancellation charge of up to 100% for that part of the
                  arrangement in addition to the above-mentioned charges.{" "}
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  Changes and Cancellations made by customers
                </h5>
                <p className="pera">
                  Any cancellation or amendment request reaches us in writing at
                  least 72 hours before departure, the First-Flight.com.au will
                  take effect it received. We try our best to assist but can’t
                  guarantee that our business partners and third-party vendors
                  will meet such requests. Any amendment or cancellation can
                  only be accepted according to the Terms and Conditions of our
                  partners and third-party collaborators.
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  Changes and Cancellations by third parties
                </h5>
                <p className="pera">
                  We will inform you as soon as possible if the third party or
                  our collaborator needs to make any significant changes to your
                  confirmed travel arrangements or cancel them. We act as a link
                  between you and our collaborators about any alternative
                  arrangements but accept no liability for any changes or
                  cancellations made to your arrangements by them under your
                  contract with them.{" "}
                </p>
              </div>
              <div className="single-terms mb-30">
                <h5 className="title font-600">
                  Special Requests and Changes Made by Customers
                </h5>
                <p className="pera">
                  First-Flight.com.au is committed to providing exceptional
                  services to its esteemed customers, regardless of their travel
                  destination. We specialize in customized travel solutions to
                  accommodate customers with specific medical needs, dietary
                  requirements, or mobility challenges that may impact their
                  travel experiences. Whether they require special assistance at
                  a hotel, a class on a flight, or a seating arrangement, we are
                  here to assist them. We request customers provide us or our
                  collaborators and business partners with comprehensive details
                  before finalizing their bookings so that we can determine the
                  availability and suitability of their preferred travel
                  arrangements. For customers with medical conditions, it is
                  advisable to furnish us with a doctor’s certificate,
                  certifying their fitness approval to undertake the selected
                  travel service.{" "}
                </p>

                <p className="pera">
                  At First-Flight.com.au, we strive to arrange everything
                  possible for requests made by the customer. All these details
                  need to be confirmed in writing or via email. Every effort
                  will be made by us and our collaborators and partners to
                  arrange your reasonable special requests without any
                  guarantee. Failure to meet any special request will not be a
                  breach of contract on our part unless the request has been
                  specifically confirmed by us. If we are not able to
                  accommodate the needs of the persons in need, we will not
                  confirm their bookings unless we receive every possible detail
                  required at the time of booking. We have the authority to
                  cancel and impose applicable cancellation charges when the
                  details are disclosed.{" "}
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">Changes by You</h5>
                <p className="pera">
                  Changes to your confirmed trip can be considered depending on
                  practicalities and availabilities. In most situations, various
                  types of changes that the customers can make, are mentioned in
                  the Terms and Conditions, but there might be a cost associated
                  with these changes. If customers need any changes to their
                  bookings after the payment has been made to us this may cause
                  an additional charge. Customers need to notify us about any
                  changes in their bookings for prompt action. These changes
                  could only take effect depending on partner, collaborator, and
                  third-party policies, availabilities, and additional fees. We
                  do not charge an amendment fee but will only charge when extra
                  costs are involved in providing additional facilities or
                  alternative services needed by the customers or imposed by any
                  of our collaborators, business partners, or third parties.
                </p>
              </div>
              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  A few things to be noted while making changes: -
                </h5>

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      No name change or transferring booking to another person
                      is allowed
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Date changes are not limited to minimum stay or maximum
                      stay but are not allowed outside the validity period of
                      the ticket
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      A change of holiday date will be treated as a cancellation
                      of the original booking. In addition to a change penalty,
                      customers need to pay an administrative fee to recalculate
                      the holiday price when we rebook according to the current
                      fares available.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="single-terms mb-30">
                <h5 className="title font-600 mb-30">
                  Delays, Missed Transport Arrangements, and other Travel
                  Information{" "}
                </h5>
                <p className="pera">
                  Flight delays or any member of the party missing the flight or
                  other transport arrangements has always been a source of
                  dissatisfaction for passenger and interrupts the travel
                  arrangements. In such a situation, passengers must contact us,
                  the airline, or the concerned transport suppliers immediately.
                  For passengers who experience flight delays, airlines should
                  solve the problems and make alternative travel arrangements
                  for them as soon as possible for impacted passengers. They
                  also take the initiative to provide additional services to
                  satisfy their passengers.{" "}
                </p>

                <p className="pera mb-30">
                  If the passengers face issues like denied boarding,
                  cancelation, or delay to flights they have the right to get a
                  refund or compensation from the airlines. Full details of
                  passenger rights will be published at the airports and
                  available to airlines. If in any case, the airline does not
                  comply with rules, the passengers have the right to complain
                  to the Civil Aviation Authority. Reimbursement in such cases
                  is the responsibility of the airline, not the travel
                  companies. A delay or cancellation of the flight does not
                  automatically entitle the passengers to cancel any other
                  travel arrangements made in conjunction with the flight. We at
                  First-Flight.com.au cannot accept any liability for any delay
                  due to any reason and it is mentioned in our Booking
                  conditions.{" "}
                </p>

                <p className="pera mb-30">
                  Details regarding the airline, flight timings, and aircraft
                  are shown on the website. The details on your confirmation
                  invoice are for guidance only and are subject to alteration
                  and confirmation. We advise passengers to carefully check
                  their tickets on receipt to ensure correct flight timings. Any
                  changes or delays in flight timings will be immediately
                  communicated to us or the service provider to get the latest
                  information before departure.{" "}
                </p>

                <p className="pera mb-30">
                  We take responsibility as your tour operator, and whatever is
                  on our website. All the details on the website are not issued
                  on behalf of and do not commit to the airlines mentioned
                  herein. We don’t take any responsibility for the services
                  provided by the airline booked during the customer’s travel
                  arrangements.{" "}
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="title font-600 mb-30">No Show Policy</h5>
                <p className="pera  mb-30">
                  Airlines always explicitly state their “No-Shows” policies in
                  their contracts. It is a legal document explaining all the
                  necessary terms and conditions. For many airlines, a ticket is
                  only valid for travel from the departure airport to the final
                  destination airport including any stopovers in the agreed
                  sequence. In the case of “No-Show”, if a passenger doesn’t
                  travel on their outbound flight despite having a confirmed
                  booking, all other connecting or return flights associated
                  with the booking will be automatically cancelled resulting in
                  a cancellation charge of up to 100%.
                </p>

                <p className="pera">
                  If the customers do not intend to check in for any part of the
                  confirmed flight they had booked, they need to contact us
                  immediately and notify us to avoid such a situation. A
                  “No-Show” could happen due to several unexpected reasons. It
                  may occur due to unforeseen situations such as traffic jams,
                  vehicle breakdowns, or sickness that causes delays in
                  reporting at the airport. We always encourage passengers to
                  arrive at the airport and check-in with ample time. If
                  passengers want to change their plans, they contact them
                  immediately to discuss various options. At
                  First-Flight.com.au, we hold no responsibility for any loss,
                  damage, or fee imposed due to “No-Shows”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermCondition;
