import React from 'react';

const Courses = () => {
    return (
    <section class="space-ptb course-details">
        <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="widgets">
                    <div class="widget widget-serach">
                        <h6 class="widget-title">Search</h6>
                        <div class="widget-content">
                            <form class="fill-form">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                            <button type="button" class="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>
                    <div class="widget widget-Categories">
                        <h6 class="widget-title">Categories</h6>
                        <div class="widget-content">
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox1" />
                                <label class="custom-control-label" for="checkbox1">Design</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox2" />
                                <label class="custom-control-label" for="checkbox2">Development</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox3" />
                                <label class="custom-control-label" for="checkbox3">Marketing</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="checkbox4" />
                            <label class="custom-control-label" for="checkbox4">IT & software</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="checkbox5" />
                            <label class="custom-control-label" for="checkbox5">Photography</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="checkbox6" />
                            <label class="custom-control-label" for="checkbox6">Music</label>
                            </div>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget-title">
                            <h6>Levels</h6>
                        </div>
                        <div class="widget-content">
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox7" />
                                <label class="custom-control-label" for="checkbox7">Beginner</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="checkbox8" />
                            <label class="custom-control-label" for="checkbox8">Intermediate</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="checkbox9" />
                            <label class="custom-control-label" for="checkbox9">Advanced</label>
                            </div>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget-title">
                            <h6>Type</h6>
                        </div>
                        <div class="widget-content">
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox12" />
                                <label class="custom-control-label" for="checkbox12">Free Course</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox10" />
                                <label class="custom-control-label" for="checkbox10">Paid Course</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox11" />
                                <label class="custom-control-label" for="checkbox11">Offline Course</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 mt-5 mt-lg-0">
            <div class="row mb-4">
                <div class="col-12">
                <h6 class="mb-0">Showing 1-5 of <span class="text-primary">28 course</span></h6>
                </div>
            </div>
            <div class="course-filter d-sm-flex mb-4">
                <ul class="course-short list-unstyled d-sm-flex mb-0">
                    <li>
                        <form class="form-inline">
                            <div class="form-group d-sm-flex d-block">
                                <label class="justify-content-start">Short by:</label>
                                <div class="short-by">
                                <select class="form-control basic-select">
                                    <option>Date new to old</option>
                                    <option>Price Low to High</option>
                                    <option>Price High to Low</option>
                                    <option>Date Old to New</option>
                                    <option>Date New to Old</option>
                                </select>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
                <ul class="course-view-list list-unstyled d-flex mb-0">
                <li>
                    <form class="form-inline">
                        <div class="form-group d-sm-flex d-block">
                            <label class="justify-content-start pr-4">Sort by: </label>
                            <div class="short-by">
                            <select class="form-control basic-select">
                                <option>12</option>
                                <option>18 </option>
                                <option>24 </option>
                                <option>64 </option>
                                <option>128</option>
                            </select>
                            </div>
                        </div>
                    </form>
                </li>
                <li><a href="index-05.html"><i class="fas fa-map-marker-alt fa-lg"></i></a></li>
                <li><a class="course-list-icon" href="course-list.html">
                    <span></span>
                    <span></span>
                    <span></span>
                </a></li>
                <li><a class="course-grid-icon active" href="course-grid.html">
                    <span></span>
                    <span></span>
                    <span></span>
                </a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-4 pb-2">
                <div class="course">
                    <div class="course-img">
                        <img class="img-fluid" src="images/course/01.jpg" alt="" />
                        <a href="#" class="course-category"><i class="far fa-bookmark"></i>Development</a>
                    </div>
                    <div class="course-info">
                    <div class="course-title">
                        <a href="#">Basic web development & coding online course</a>
                    </div>
                    <div class="course-instructor">by
                        <a href="#">Alice Williams</a>
                    </div>
                    <div class="course-rate-price">
                        <div class="rating">
                            <span>4.1</span>
                            <a href="#">101 Ratings</a>                      
                            </div>
                            <div class="price">$59</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4 pb-2">
                    <div class="course">
                        <div class="course-img">
                            <img class="img-fluid" src="images/course/07.jpg" alt="" />
                            <a href="#" class="course-category"><i class="far fa-bookmark"></i>Development</a>
                        </div>
                        <div class="course-info">
                            <div class="course-title">
                            <a href="#">Great thinking devices to help you learn tough topics</a>
                            </div>
                            <div class="course-instructor">by
                            <a href="#">Alice Williams</a>
                            </div>
                            <div class="course-rate-price">
                            <div class="rating">
                                    <span>4.4</span>
                                    <a href="#">578 Ratings</a>                      
                                    </div>
                                    <div class="price">$79</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-4 pb-2">
                        <div class="course">
                            <div class="course-img">
                                    <img class="img-fluid" src="images/course/02.jpg" alt="" />
                                    <a href="#" class="course-category"><i class="far fa-bookmark"></i> Design</a>
                                </div>
                                <div class="course-info">
                                <div class="course-title">
                                    <a href="#">UX & web design master course: Strategy, design..</a>
                                </div>
                                <div class="course-instructor">by
                                    <a href="#">Joana Williams</a>
                                </div>
                                <div class="course-rate-price">
                                    <div class="rating">
                                    <span>3.1</span>
                                    <a href="#">57 Ratings</a>
                                    </div>
                                    <div class="price">$49</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-4 pb-2">
                    <div class="grid-item" data-groups='["marketing"]'>
                        <div class="course">
                        <div class="course-img">
                            <img class="img-fluid" src="images/course/03.jpg" alt="" />
                            <a href="#" class="course-category"><i class="far fa-bookmark"></i> Marketing</a>
                        </div>
                        <div class="course-info">
                            <div class="course-title">
                            <a href="#">Diploma in marketing management course</a>
                            </div>
                            <div class="course-instructor">by
                            <a href="#">Felica Queen</a>
                            </div>
                            <div class="course-rate-price">
                            <div class="rating">
                                <span>3.4</span>
                                <a href="#">97 Ratings</a>
                            </div>
                            <div class="price">$19</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-6 mb-4 pb-2">
                    <div class="course">
                        <div class="course-img">
                        <img class="img-fluid" src="images/course/04.jpg" alt="" />
                        <a href="#" class="course-category"><i class="far fa-bookmark"></i> IT & software</a>
                        </div>
                        <div class="course-info">
                        <div class="course-title">
                            <a href="#">Introduction to robotic process automation (RPA)</a>
                        </div>
                        <div class="course-instructor">by
                            <a href="#">Ricardo Marshall</a>
                        </div>
                        <div class="course-rate-price">
                            <div class="rating">
                            <span>4.2</span>
                            <a href="#">172 Ratings</a>
                            </div>
                            <div class="price">$99</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-6 mb-4 pb-2">
                    <div class="course">
                        <div class="course-img">
                        <img class="img-fluid" src="images/course/05.jpg" alt="" />
                        <a href="#" class="course-category"><i class="far fa-bookmark"></i> Photography</a>
                        </div>
                        <div class="course-info">
                        <div class="course-title">
                            <a href="#">Certificate in camera and photography course</a>
                        </div>
                        <div class="course-instructor">by
                            <a href="#">Mellissa Doe</a>
                        </div>
                        <div class="course-rate-price">
                            <div class="rating">
                            <span>3.4</span>
                            <a href="#">48 Ratings</a>
                            </div>
                            <div class="price">$199</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-6 mb-4 pb-2 mb-sm-0 pb-lg-0">
                    <div class="course">
                        <div class="course-img">
                        <img class="img-fluid" src="images/course/06.jpg" alt="" />
                        <a href="#" class="course-category"><i class="far fa-bookmark"></i> Music</a>
                        </div>
                        <div class="course-info">
                        <div class="course-title">
                            <a href="#">Composing music with others online course</a>
                        </div>
                        <div class="course-instructor">by
                            <a href="#">Paul Flavius</a>
                        </div>
                        <div class="course-rate-price">
                            <div class="rating">
                            <span>1.4</span>
                            <a href="#">157 Ratings</a>
                            </div>
                            <div class="price">$149</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-6">
                    <div class="course">
                        <div class="course-img">
                        <img class="img-fluid" src="images/course/07.jpg" alt="" />
                        <a href="#" class="course-category"><i class="far fa-bookmark"></i> Personal Development</a>
                        </div>
                        <div class="course-info">
                        <div class="course-title">
                            <a href="#">Great thinking devices to help you learn tough topics</a>
                        </div>
                        <div class="course-instructor">by
                            <a href="#">Alice Williams</a>
                        </div>
                        <div class="course-rate-price">
                            <div class="rating">
                            <span>4.4</span>
                            <a href="#">18 Ratings</a>
                            </div>
                            <div class="price">$79</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center mt-4 mt-md-5">
                    <nav>
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            <li class="page-item active">
                                <span class="page-link">
                                1
                                <span class="sr-only">(current)</span>
                                </span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item"><a class="page-link" href="#">6</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </section>
    );
};

export default Courses;