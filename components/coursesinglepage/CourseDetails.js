import React from 'react';
import CourseDetailsSidebar from './CourseDetailsSidebar';

const CourseDetails = () => {
    return (
        <section class="space-ptb course-details">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-xl-8">
              <img class="img-fluid  mb-4" src="images/course/10.jpg" alt="" />
              <h4 class="news-title mb-2">PMP Exam Prep Seminar - PMBOK Guide 6</h4>
              <div class="d-flex align-items-center">
                <span class="text-warning h6 mb-0 mr-2">3.5</span>
                <ul class="list-unstyled d-flex mb-0 mr-2">
                  <li><i class="fas fa-star text-warning"></i></li>
                  <li><i class="fas fa-star text-warning"></i></li>
                  <li><i class="fas fa-star text-warning"></i></li>
                  <li><i class="fas fa-star-half-alt text-warning"></i></li>
                  <li><i class="far fa-star text-warning"></i></li>
                </ul>
              </div>
              <div><b class="mr-2">Created by </b><a href="#">Felica Queen</a></div>
              <ul class="list-unstyled d-sm-flex mt-3 mb-4">
                <li class="d-inline"><a class="btn btn-outline-dark-hover btn-sm mr-3 mb-sm-0 mb-3" href="#">Wishlist</a></li>
                <li class="d-inline social-share">
                  <a class="btn btn-outline-primary-hover btn-sm mr-3 mb-sm-0 mb-3" href="#">Share</a>
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                  </ul>
                </li>
                <li class="d-inline"><a class="btn btn-outline-dark-hover btn-sm" href="#">Gift this course</a></li>
              </ul>
              <ul class="list-unstyled d-flex flex-wrap mb-5">
                <li class="course-d-Teacher mr-3 mr-lg-5 mb-2 mb-lg-0">
                  <div class="d-flex">
                    <img class="mr-2 mr-lg-3 mt-2" src="images/avatar/11.jpg" alt="" />
                    <div class="d-block">
                      <p class="mb-0">Teacher</p>
                      <span class="lead fw-6 text-dark">Alice Williams</span>
                    </div>
                  </div>
                </li>
                <li class="mr-3 mr-lg-5 mb-2 mb-lg-0">
                  <div class="d-flex">
                    <i class="flaticon-bookmark fa-3x mt-2 mr-2 mr-lg-3 text-primary"></i>
                    <div class="d-block">
                      <p class="mb-0">Categories</p>
                      <span class="lead fw-6 text-dark">Project Management</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <i class="flaticon-student fa-3x mt-2 mr-2 mr-lg-3 text-primary"></i>
                    <div class="d-block">
                      <p class="mb-0">Students</p>
                      <span class="lead fw-6 text-dark">157 (Registered)</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="border mb-4">
                <h6 class="text-dark px-4 py-2 bg-light mb-0">Description</h6>
                <div class="p-4 border-top">
                  <span class="lead text-dark fw-6">Course Description</span>
                  <p class="mt-2">Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how your mind is, how you feel about staying on this path. </p>
                  <p class="mb-4">Walk out into your future to the 10 year point. Walk out 10 years into your future and feel how it feels to carry on doing the same thing. This path is just like today, with one difference: you have 10 fewer years remaining in your life.</p>
                  <span class="lead text-dark fw-6">Main features</span>
                  <ul class="list mt-2">
                    <li><i class="far fa-circle"></i>Use a past defeat as a motivator. </li>
                    <li><i class="far fa-circle"></i>Most people believe that success is difficult.</li>
                    <li><i class="far fa-circle"></i>Success is something of which we all want more.</li>
                    <li><i class="far fa-circle"></i>Give yourself the power of responsibility. </li>
                    <li><i class="far fa-circle"></i>Remind yourself the only thing stopping you is yourself.</li>
                    <li><i class="far fa-circle"></i>They’re wrong – it’s not!</li>
                  </ul>
                </div>
              </div>
              <div class="border mb-4">
                <h6 class="text-dark px-4 py-2 bg-light mb-0">Curriculum</h6>
                <div class="p-4 border-top">
                  <span class="lead text-dark fw-6">Overview</span>
                  <ul class="list-unstyled mt-3">
                    <li class="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i class="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span class="mr-4">Lecture 1 :</span>
                      <span>Getting Started</span>
                      <div class="ml-auto">
                        <i class="far fa-clock text-primary mr-2"></i>
                        <span>45 min</span>
                      </div>
                    </li>
                    <li class="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i class="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span class="mr-4">Lecture 2 :</span>
                      <span>YouTube Video</span>
                      <div class="ml-auto">
                        <i class="far fa-clock text-primary mr-2"></i>
                        <span>30 min</span>
                      </div>
                    </li>
                    <li class="d-sm-flex align-items-center pb-3 mb-3">
                      <i class="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span class="mr-4">Lecture 3 :</span>
                      <span>Live lesson - zoom</span>
                      <div class="ml-auto">
                        <i class="far fa-clock text-primary mr-2"></i>
                        <span>20 min</span>
                      </div>
                    </li>
                  </ul>
                  <span class="lead text-dark fw-6">Beginner</span>
                  <ul class="list-unstyled mt-3 mb-0">
                    <li class="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i class="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span class="mr-4">Lecture 1 :</span>
                      <span>Getting Started</span>
                      <div class="ml-auto">
                        <i class="far fa-clock text-primary mr-2"></i>
                        <span>45 min</span>
                      </div>
                    </li>
                    <li class="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i class="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span class="mr-4">Lecture 2 :</span>
                      <span>YouTube Video</span>
                      <div class="ml-auto">
                        <i class="far fa-clock text-primary mr-2"></i>
                        <span>30 min</span>
                      </div>
                    </li>
                    <li class="d-sm-flex align-items-center">
                      <i class="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span class="mr-4">Lecture 3 :</span>
                      <span>Live lesson - zoom</span>
                      <div class="ml-auto">
                        <i class="far fa-clock text-primary mr-2"></i>
                        <span>20 min</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border mb-4">
                <h6 class="text-dark px-4 py-2 bg-light mb-0">Student feedback </h6>
                <div class="p-4 border-top">
                  <div class="d-flex align-items-center mb-2">
                    <div class="mr-auto">
                      <span>40 Reviews</span>
                      <ul class="list-unstyled d-flex mb-0">
                        <li><i class="fas fa-star text-warning"></i></li>
                        <li><i class="fas fa-star text-warning"></i></li>
                        <li><i class="fas fa-star text-warning"></i></li>
                        <li><i class="fas fa-star-half-alt text-warning"></i></li>
                        <li><i class="far fa-star text-warning"></i></li>
                      </ul>
                    </div>
                    <b class="display-4 text-warning font-weight-bold">3.5</b>
                  </div>
                  <div class="progress-item mb-2">
                    <div class="d-flex">
                      <div class="progress-title mb-1 mr-auto">5 Stars</div>
                      <span>14</span>
                    </div>
                    <div class="progress rounded" style={{height: '6px'}}>
                      <div class="progress-bar bg-warning rounded" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="progress-item mb-2">
                    <div class="d-flex">
                      <div class="progress-title mb-1 mr-auto">4 Stars</div>
                      <span>12</span>
                    </div>
                    <div class="progress rounded" style={{height: '6px'}}>
                      <div class="progress-bar bg-warning rounded" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="progress-item mb-2">
                    <div class="d-flex">
                      <div class="progress-title mb-1 mr-auto">3 Stars</div>
                      <span>3</span>
                    </div>
                    <div class="progress rounded" style={{height: '6px'}}>
                      <div class="progress-bar bg-warning rounded" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="progress-item mb-2">
                    <div class="d-flex">
                      <div class="progress-title mb-1 mr-auto">2 Stars</div>
                      <span>4</span>
                    </div>
                    <div class="progress rounded" style={{height: '6px'}}>
                      <div class="progress-bar bg-warning rounded" role="progressbar" style={{width: '35%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="progress-item">
                    <div class="d-flex">
                      <div class="progress-title mb-1 mr-auto">1 Stars</div>
                      <span>7</span>
                    </div>
                    <div class="progress rounded" style={{height: '6px'}}>
                      <div class="progress-bar bg-warning rounded" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border mb-4">
                <h6 class="text-dark px-4 py-2 bg-light mb-0">Listing 5 Reviews For PMP Exam Prep Seminar - PMBOK Guide 6 </h6>
                <div class="p-4 border-top">
                  <div class="mb-4 d-xl-inline-flex">
                    <img class="mr-3 media-img" src="images/avatar/06.jpg" alt="" />
                    <div class="media-body">
                      <div class="px-xl-4 mt-3 mt-xl-0">
                        <div class="d-flex align-items-center">
                          <h6 class="mt-0">Felica Queen </h6>
                          <div class="d-flex ml-auto mb-3">
                            <span class="px-2 border text-success rounded-sm d-inline-block mr-2">4.0</span>
                            <ul class="list-unstyled d-flex mb-0">
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="far fa-star text-warning"></i></li>
                            </ul>
                          </div>
                        </div>
                        <p>Then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan.</p>
                        <div class="d-sm-flex">
                          <a class="bg-light text-dark rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block mb-2 mb-sm-0" href="#"> <i class="fas fa-reply pr-1"></i> Reply Review </a>
                          <a class="bg-success-soft text-success rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block" href="#"> <i class="far fa-thumbs-up pr-1"></i> 56 Votes</a>
                          <a class="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block" href="#"> <i class="far fa-thumbs-down pr-1"></i> 06</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="d-xl-inline-flex mt-4 mb-4">
                    <img class="mr-3 media-img" src="images/avatar/11.jpg" alt="" />
                    <div class="media-body">
                      <div class="px-xl-4 mt-3 mt-xl-0">
                        <div class="d-flex align-items-center">
                          <h6 class="mt-0">Alice Williams </h6>
                          <div class="d-flex ml-auto mb-3">
                            <span class="px-2 border text-success border-radius d-inline-block mr-2">3.0</span>
                            <ul class="list-unstyled d-flex mb-0">
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="far fa-star text-warning"></i></li>
                              <li><i class="far fa-star text-warning"></i></li>
                            </ul>
                          </div>
                        </div>
                        <p>Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times This requires a little.</p>
                        <div class="d-sm-flex">
                          <a class="bg-light text-dark rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block mb-2 mb-sm-0" href="#"> <i class="fas fa-reply pr-1"></i> Reply Review </a>
                          <a class="bg-success-soft text-success rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block" href="#"> <i class="far fa-thumbs-up pr-1"></i> 67 Votes</a>
                          <a class="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block" href="#"> <i class="far fa-thumbs-down pr-1"></i> 04</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="d-xl-inline-flex">
                    <img class="mr-3 media-img" src="images/avatar/05.jpg" alt="" />
                    <div class="media-body">
                      <div class="px-xl-4 mt-3 mt-xl-0">
                        <div class="d-flex align-items-center">
                          <h6 class="mt-0">Mellissa Doe</h6>
                          <div class="d-flex ml-auto mb-3">
                            <span class="px-2 border text-success rounded-sm d-inline-block mr-2">5.0</span>
                            <ul class="list-unstyled d-flex mb-0">
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                              <li><i class="fas fa-star text-warning"></i></li>
                            </ul>
                          </div>
                        </div>
                        <p>I coach my clients to practice the 3 D’s – Defer, Delegate or Delete. Can the particular activity be done later? Defer it! Can it be done by someone else? Delegate</p>
                        <div class="d-sm-flex">
                          <a class="bg-light text-dark rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block mb-2 mb-sm-0" href="#"> <i class="fas fa-reply pr-1"></i> Reply Review </a>
                          <a class="bg-success-soft text-success rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block" href="#"> <i class="far fa-thumbs-up pr-1"></i> 48 Votes</a>
                          <a class="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block" href="#"> <i class="far fa-thumbs-down pr-1"></i> 09</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border">
                <h6 class="text-dark px-4 py-2 bg-light mb-0">Add a Review</h6>
                <div class="p-4 border-top">
                  <form class="form-flat-style">
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <div class="ratings">
                          <input type="radio" id="star5" name="ratings" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                          <input type="radio" id="star4half" name="ratings" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                          <input type="radio" id="star4" name="ratings" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                          <input type="radio" id="star3half" name="ratings" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                          <input type="radio" id="star3" name="ratings" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                          <input type="radio" id="star2half" name="ratings" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                          <input type="radio" id="star2" name="ratings" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                          <input type="radio" id="star1half" name="ratings" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                          <input type="radio" id="star1" name="ratings" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                          <input type="radio" id="starhalf" name="ratings" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </div>
                      </div>
                      <div class="form-group col-lg-4">
                        <label>Your name</label>
                        <input type="text" class="form-control" placeholder="Your name" />
                      </div>
                      <div class="form-group col-lg-4">
                        <label>Your email</label>
                        <input type="email" class="form-control" placeholder="Your email" />
                      </div>
                      <div class="form-group col-lg-4">
                        <label>Subject</label>
                        <input type="text" class="form-control" id="phone" placeholder="Subject" />
                      </div>
                      <div class="form-group col-lg-12">
                        <label>Your message</label>
                        <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
                      </div>
                      <div class="col-md-12">
                        <a class="btn btn-primary" href="#">Submit review</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-xl-4 mt-5 mt-md-0">
                <CourseDetailsSidebar />
            </div>
          </div>
        </div>
      </section>
    );
};

export default CourseDetails;