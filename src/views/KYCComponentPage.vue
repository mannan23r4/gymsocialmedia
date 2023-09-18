<template>
<div>
    <navbar-sidebar-footer-component />

    <div class="container h-100 " id="firstCont">
        <div class="row">
            <div class="col-md-6 pt-5">
                <h1 class="txt1">Complete KYC (Know Your Customer) Form </h1>
                <div class="col-md-12">
                    <p class="txt2">
                        This is the information that is used to identify you and proceed you to gain multiple benefits.
                        <span>This verification may take more than <span style="color: red;">2-3 days</span> , if still don't recieve a mail on {{ myData.email }}, then kindly contact at xanaclub@club.com </span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="row pt-4">
                    <div class="col-md-12">
                        <h3 class="txt1">1.Mandatory Informations</h3>
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <h5>
                        Full Name/ Legal Name <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-6">
                        <input v-model="v$.form.fname.$model" class="px-4 input-field" placeholder="John" type="text" />
                        <p>First Name</p>
                        <!-- Error Message -->
                        <div class="input-errors" v-for="(error, index) of v$.form.fname.$errors" :key="index">
                            <div class="error-msg" style="color: red; text-align: left; font-size: 16px">
                                {{ error.$message }}
                                <i class="fa fa-info " title="Names can only contain letters (a-z)." style="text-align: right">
                                </i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <input v-model="v$.form.lname.$model" class="px-4 input-field" placeholder="Smith" type="text" />
                        <p>Last Name</p>
                        <!-- Error Message -->
                        <div class="input-errors" v-for="(error, index) of v$.form.lname.$errors" :key="index">
                            <div class="error-msg" style="color: red; text-align: left; font-size: 16px">
                                {{ error.$message }}
                                <i class="fa fa-info " title="Names can only contain letters (a-z)." style="text-align: right">
                                </i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row pt-1" style="color: white">
                    <h5>
                        User Identity <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-6">
                        <input v-model="v$.form.aadharcardno.$model" class="px-4 input-field" placeholder="EX:1275432" type="text" />
                        <p>Aadhar Card No.</p>
                    </div>

                    <div class="input-errors" v-for="(error, index) of v$.form.aadharcardno.$errors" :key="index">
                        <div class="error-msg" style="color: red; text-align: left; font-size: 16px">
                            {{ error.$message }}
                            <i class="fa fa-info " title="Aadhar Card can only contain multiple numbers (0-9)." style="text-align: right">
                            </i>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <input v-model="v$.form.pancardno.$model" class="px-4 input-field" placeholder="EX:1275432" type="text" />
                        <p>Pan Card No.</p>
                    </div>

                    <div class="input-errors" v-for="(error, index) of v$.form.pancardno.$errors" :key="index">
                        <div class="error-msg" style="color: red; text-align: left; font-size: 16px">
                            {{ error.$message }}
                            <i class="fa fa-info " title="Pan Card can only contain multiple numbers (0-9)." style="text-align: right">
                            </i>
                        </div>
                    </div>

                </div>

                <div class="row pt-3" style="color: white">
                    <h5>
                        User Address <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-12">
                        <input class="col-md-4 px-4 input-field" v-model="form.address1" placeholder="John" type="text" />
                        <p>Street Address</p>
                    </div>
                </div>

                <div class="row" style="color: white">
                    <div class="col-md-12">
                        <input class="col-md-4 px-4 input-field" v-model="form.address2" placeholder="John" type="text" />
                        <p>Street Address Line 2</p>
                    </div>
                </div>

                <div class="row" style="color: white">
                    <div class="col-md-6">
                        <input class="px-4 input-field" v-model="form.city" placeholder="City" type="text" />
                        <p>City</p>
                    </div>

                    <div class="col-md-6">
                        <input class="px-4 input-field" v-model="form.state" placeholder="State" type="text" />
                        <p>State</p>
                    </div>
                </div>

                <div class="row" style="color: white">
                    <div class="col-md-6">
                        <input class="px-4 input-field" v-model="v$.form.zipcode.$model" placeholder="Postal/Zip-Code" type="text" />
                        <p>Postal/Zip-Code</p>
                        <div class="input-errors" v-for="(error, index) of v$.form.zipcode.$errors" :key="index">
                            <div class="error-msg" style="color: red; text-align: left; font-size: 16px">
                                {{ error.$message }}
                                <i class="fa fa-info " title="Area Code can only contain multiple numbers (0-9)." style="text-align: right">
                                </i>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <select value="null" v-model="form.country" class="px-4 input-field col-md-12">
                            <option value="Select" selected>Select</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Employees State Insurance Corporation (ESIC)">
                                Employees State Insurance Corporation (ESIC)
                            </option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegowina">
                                Bosnia and Herzegowina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                                British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">
                                Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo">Congo, the Democratic Republic of the</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia (Hrvatska)</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">
                                Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="France Metropolitan">France, Metropolitan</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">
                                French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard and McDonald Islands">
                                Heard and Mc Donald Islands
                            </option>
                            <option value="Holy See">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran (Islamic Republic of)</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Democratic People's Republic of Korea">
                                Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                                Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">
                                Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">Micronesia, Federated States of</option>
                            <option value="Moldova">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint LUCIA">Saint LUCIA</option>
                            <option value="Saint Vincent">
                                Saint Vincent and the Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia (Slovak Republic)</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia">
                                South Georgia and the South Sandwich Islands
                            </option>
                            <option value="Span">Spain</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="St. Helena">St. Helena</option>
                            <option value="St. Pierre and Miguelon">
                                St. Pierre and Miquelon
                            </option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan, Province of China</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">
                                United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Viet Nam</option>
                            <option value="Virgin Islands (British)">
                                Virgin Islands (British)
                            </option>
                            <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                            <option value="Wallis and Futana Islands">
                                Wallis and Futuna Islands
                            </option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                        <p>Country</p>
                    </div>

                    <div class="row" style="color: white">
                        <div class="col-md-10"></div>

                        <div class="col-md-2">
                            <button class="p-2 px-4 btn1" @click="firststep()">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 pt-5 " style="color: white;">
                <div class="row">
                    <div class="col-md-6">
                        <div class="pt-5">
                            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${aadharCardFrontPreview})`,}"></div>
                        </div>
                        <div class="px-3">
                            <input type="file" accept="image/*" @change="onChangeAadharCardFront" @input="pickFile" ref="fileInput">
                            <p class="pt-3 text-center " style="font-size: 18px; font-weight: 500; "> Aadhar Card Front Image</p>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="pt-5">
                            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${aadharCardBackPreview})`,}"></div>
                        </div>
                        <div class="px-3">
                            <input type="file" accept="image/*" @change="onChangeAadharCardBack" @input="pickFile" ref="fileInput">
                            <p class="pt-3 text-center" style="font-size: 18px; font-weight: 500; "> Aadhar Card Back Image</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="pt-5">
                            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${panCardFrontPreview})`,}"></div>
                        </div>
                        <div class="px-3">
                            <input type="file" accept="image/*" @change="onChangePanCardFront" @input="pickFile" ref="fileInput">
                            <p class="pt-3 text-center" style="font-size: 18px; font-weight: 500; "> Pan Card Front Image</p>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="pt-5">
                            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${panCardBackPreview})`,}"></div>
                        </div>
                        <div class="px-3">
                            <input type="file" accept="image/*" @change="onChangePanCardBack" @input="pickFile" ref="fileInput">
                            <p class="pt-3 text-center" style="font-size: 18px; font-weight: 500; "> Pan Card Back Image</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="container h-100 d-none " id="secondCont">
        <div class="row ">
            <div class="col-md-6">
                <div class="col-md-12 pt-5">
                    <h1 class="txt1">Complete KYC (Know Your Customer) Form </h1>
                    <div class="col-md-12">
                        <p class="txt2">
                            This is the information that is used to identify you and proceed you to gain multiple benefits.
                            <span>This verification may take more than <span style="color: red;">2-3 days</span> , if still don't recieve a mail on {{ myData.email }}, then kindly contact at xanaclub@club.com </span>
                        </p>
                    </div>
                </div>

                <div class="row pt-4">
                    <div class="col-md-12">
                        <h3 class="txt1">2.Additional Information</h3>
                    </div>
                </div>
                <div class="row pt-3" style="color: white">
                    <h5>
                        Area Code and Phone Number <span style="color: red"><sup>*</sup></span>
                    </h5>

                    <div class="col-md-6">
                        <input class="px-4 input-field" v-model="v$.form.areacode.$model" placeholder="EX:1275432 " type="text" />
                        <p>Area Code</p>
                        <div class="input-errors" v-for="(error, index) of v$.form.areacode.$errors" :key="index">
                            <div class="error-msg" style="color: red; text-align: left; font-size: 16px">
                                {{ error.$message }}
                                <i class="fa fa-info " title="Area Code can only contain multiple numbers (0-9)." style="text-align: right">
                                </i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <input class="px-4 input-field" v-model="v$.form.phonenumber.$model" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        <p>Phone Number</p>
                        <div class="input-errors" v-for="(error, index) of v$.form.phonenumber.$errors" :key="index">
                            <div class="error-msg" style="color: red; text-align: left; font-size: 16px">
                                {{ error.$message }}
                                <i class="fa fa-info " title="Area Code can only contain multiple numbers (0-9)." style="text-align: right">
                                </i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <h5>
                        E-Mail: <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-12">
                        <input v-model="v$.form.email.$model" class="col-md-12 px-4 input-field" cla placeholder="admin123@admin.com" type="email" />
                        <!-- Error Message -->
                        <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                            <div class="error-msg" style="color: red; font-size: 16px">
                                {{ error.$message }}
                                <i class="fa fa-info " title="Email can only contain letters (a-z), numbers (0-9), and periods (@)." style="text-align: center;">
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-3" style="color: white">
                    <h5>
                        OTP recieved on {{ myData.email }} <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-12">
                        <input class="col-md-12 px-4 input-field" placeholder="Enter OTP recieved on " type="text" />
                        <!-- v-model="v$.form.email.$model" -->
                        <!-- Error Message -->
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <h5>
                        Student Birth Date <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-12">
                        <input class="px-4 input-field" v-model="form.birthdate" placeholder="" type="date" />
                    </div>
                </div>

                <div class="row" style="color: white">
                    <h5>Gender</h5>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4">
                                <input type="radio" v-model="form.gender" name="gender" value="male" /> Male
                            </div>

                            <div class="col-md-4">
                                <input type="radio" v-model="form.gender" name="gender" value="female" /> Female
                            </div>

                            <div class="col-md-4">
                                <input type="radio" v-model="form.gender" name="gender" value="notprefer" /> Prefer Not To Say
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <h5>
                        PASSPORT PHOTO <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-12">
                        <input type="file" accept=".png" ref="fileInput" @input="pickFile" class="px-4 input-field" />
                        <p>Share PNG Only.</p>
                    </div>
                </div>

                <div class="row  text-center " style="color: white">
                    <div class="col-md-6">
                        <button class="p-2 px-4 btn1" @click="secondstep()">Back</button>
                    </div>

                    <div class="col-md-6 text-center">
                        <button class="p-2 px-4 btn1" @click="thirdstep()">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container h-100 d-none" id="thirdCont">
        <div class="row">
            <div class="col-md-6">
                <div class="row pt-4">
                    <div class="col-md-12">
                        <h3 class="txt1">4. Essay.</h3>
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <div class="col-md-12">
                        <p>
                            Your essay should be 300-500 words. You should address in your
                            essay: your college goals and choice of major, what you intend to do
                            with your education, and why a scholarship is important to you.
                            Include any academic and non-academic accomplishments, personal
                            characteristics, or experiences that make you uniquely worthy of
                            scholarship consideration.
                        </p>
                    </div>
                </div>

                <div class="row pt-5">
                    <div class="col-md-12">
                        <h3 class="txt1">5. Applicant Signature.</h3>
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <div class="col-md-12">
                        <p>
                            By signing the space below, you are certifying that all information
                            is correct and that you are the person completing this application.
                            When you press the submit button, you will receive an email
                            confirmation that your application was received. Please print for
                            your records and retain as verification of your application.
                        </p>
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <h5>
                        Signature <span style="color: red"><sup>*</sup></span>
                    </h5>
                    <div class="col-md-12">
                        <input type="file" accept="image/*,.png" class="px-4 input-field" />
                        <p>Share PNG Only.</p>
                    </div>
                </div>

                <div class="row pt-3" style="color: white">
                    <div class="col-md-12">
                        <input type="checkbox" value="ticked" v-model="form.termsandcondition" id="termsandcondition" />
                        <label id="termscondition"> I read and understand <a href="">instructions</a><sup style="color: red;">*</sup></label>
                    </div>
                </div>

                <div class="row text-center" style="color: white">
                    <div class="col-md-6">
                        <button class="p-2 px-4 btn1" @click="from3to2()">Back</button>
                    </div>

                    <div class="col-md-6">
                        <button class="p-2 px-4 btn1" @click="showModalconfirm = true ">Submit</button>

                        <!-- @click="savedata()" -->
                    </div>

                    <div v-if="showModalconfirm" style="color: black">
                        <transition name="modal">
                            <div class="modal-mask">
                                <div class="modal-wrapper">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Confirm Submission </h5>
                                                <button type="button" style="border: 0; font-size: 25px" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span @click="showModalconfirm = false">&times;</span>
                                                </button>
                                            </div>

                                            <div>
                                                <p style="text-align: left;" class="px-4 p-1">You wont't be able to change the form afterwards, you'll have to submit a new form from scratch. <span style="color: red;">Do you want to proceed?</span> </p>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" style="color: red;" class="btn2 px-3 p-1">
                                                    <form enctype="multipart/form-data" @submit="submitForm">
                                                        <button type="submit" @click="savedata() "> yes,confirm </button>
                                                    </form>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pt-5">
                <!-- <img src="https://images.unsplash.com/photo-1532276269954-64188308dcb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="img1" alt=""> -->
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios";
import NavbarSidebarFooterComponent from "../components/NavbarSidebarFooterComponent.vue";
import useVuelidate from "@vuelidate/core";
import {
    email
} from "@vuelidate/validators";

export function validName(name) {
    let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
    if (validNamePattern.test(name)) {
        return true;
    }
    return false;
}

export function validNumber(number) {
    let validNumberPattern = new RegExp("^[0-9]+$");
    if (validNumberPattern.test(number)) {
        return true;
    }
    return false;
}

export default {
    components: {
        NavbarSidebarFooterComponent,
    },
    data() {
        return {
            result: {},
            kycform: [],
            myData: "",
            showModalconfirm: false,
            previewImage: null,
            file: null,
            aadharCardFrontPreview: '',
            aadharCardBackPreview: '',
            panCardFrontPreview: '',
            panCardBackPreview: '',

            form: {
                fname: "",
                lname: "",
                aadharcardno: "",
                aadharcardnoimagefront: "",
                aadharcardnoimageback: "",
                pancardno: "",
                pancardnoimagefront: "",
                pancardnoimageback: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipcode: "",
                country: "",
                areacode: "",
                phonenumber: "",
                email: "",
                birthdate: "",
                gender: "",
                termsandcondition: "",
            },
        };

    },

    setup() {
        return {
            v$: useVuelidate(),
        };
    },

    validations() {
        return {
            form: {
                fname: {
                    name_validation: {
                        $validator: validName,
                        $message: "Invalid Name.",
                    },
                },
                lname: {
                    name_validation: {
                        $validator: validName,
                        $message: "Invalid Name.",
                    },
                },
                username: {
                    name_validation: {
                        $validator: validName,
                        $message: "Invalid Username. ",
                    },
                },
                email: {
                    email,
                },
                aadharcardno: {
                    number_validation: {
                        $validator: validNumber,
                        $message: "Invalid Student-Id. ",
                    },
                },

                pancardno: {
                    number_validation: {
                        $validator: validNumber,
                        $message: "Invalid Student-Id. ",
                    },
                },
                areacode: {
                    number_validation: {
                        $validator: validNumber,
                        $message: "Invalid Area-Code. ",
                    },
                },

                phonenumber: {
                    number_validation: {
                        $validator: validNumber,
                        $message: "Invalid Phone Number. ",
                    },
                },
                zipcode: {
                    number_validation: {
                        $validator: validNumber,
                        $message: "Invalid Postal/Zip-Code. ",
                    },
                },
            },
        };
    },

    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
        console.log("mounted() called.......");
        this.myKycDetails()
        var token = localStorage.getItem('token')
        axios.defaults.headers.common["Authorization"] = "Bearer" + token
        axios.defaults.headers.common["Accept"] = "*/*"
    },

    methods: {
        onChangeAadharCardFront(e) {
            const file = e.target.files[0];
            if (file) {
                this.form.aadharcardnoimagefront = file;
                this.aadharCardFrontPreview = URL.createObjectURL(file);
            }
        },

        onChangeAadharCardBack(e) {
            const file = e.target.files[0];
            if (file) {
                this.form.aadharcardnoimageback = file;
                this.aadharCardBackPreview = URL.createObjectURL(file);
            }
        },

        onChangePanCardFront(e) {
            const file = e.target.files[0];
            if (file) {
                this.form.pancardnoimagefront = file;
                this.panCardFrontPreview = URL.createObjectURL(file);
            }
        },
        onChangePanCardBack(e) {
            const file = e.target.files[0];
            if (file) {
                this.form.pancardnoimageback = file;
                this.panCardBackPreview = URL.createObjectURL(file);
            }
        },

        submitForm(e) {
            e.preventDefault();
            if (this.file) {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };

                let data = new FormData();
                data.append('file', this.file);
                axios.post('http://127.0.0.1:8000/api/submitkyc', data, config)
                    .then((res) => {
                        this.success = res.data.success;
                        // Assuming the response contains the imagepath and imagename
                        this.form.aadharcardnoimagefront = res.data.aadharcardnoimagefront; // Assuming it's the first URL in the array
                        this.form.aadharcardnoimageback = res.data.aadharcardnoimageback;
                        this.form.pancardnoimagefront = res.data.pancardnoimagefront;
                        this.form.pancardnoimageback = res.data.pancardnoimageback;

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },

        savedata() {
            axios
                .post("http://127.0.0.1:8000/api/submitkyc", this.form)
                .then(({
                    data
                }) => {
                    console.log(data);
                    try {
                        if (data.status === true) {
                            this.$router.push({
                                path: '/kycformsubmitted'
                            })
                        } else {
                            alert("FALSE DETAILS, DIDN'T SUBMITTED KYC FORM")
                        }
                    } catch (err) {
                        alert("Error, please try again");
                    }
                });
        },

        myKycDetails() {
            axios.get("http://127.0.0.1:8000/api/submitkyc")
                .then(({
                    data
                }) => {
                    console.log(data);
                    try {
                        this.forms = data;
                    } catch (err) {
                        alert("Error, please try again");
                    }
                });
        },

        selectImage() {
            this.$refs.fileInput.click()
        },
        pickFile() {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.previewImage = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },

        firststep() {
            document.getElementById("firstCont").classList.add("d-none");
            document.getElementById("secondCont").classList.remove("d-none");
            document.getElementById("thirdCont").classList.add("d-none");
        },
        secondstep() {
            document.getElementById("firstCont").classList.remove("d-none");
            document.getElementById("secondCont").classList.add("d-none");
            document.getElementById("thirdCont").classList.add("d-none");
        },
        from3to2() {
            document.getElementById("firstCont").classList.add("d-none");
            document.getElementById("secondCont").classList.remove("d-none");
            document.getElementById("thirdCont").classList.add("d-none");
        },
        thirdstep() {
            document.getElementById("secondCont").classList.add("d-none");
            document.getElementById("thirdCont").classList.remove("d-none");
            document.getElementById("firstCont").classList.add("d-none");
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.img1 {
    background-repeat: repeat;
    background-size: cover;
    width: 100%;
    height: 90%;
    border-radius: 12px;
}

.txt1 {
    font-family: "Fira Sans", sans-serif;
    font-size: 28px;
    color: azure;
}

.txt2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 15px;
    color: azure;
}

.btn1 {
    border-radius: 12px;
    background-color: rgba(37, 37, 37, 255);
    color: white;
    border: 0;
}

.btn1:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.6s ease;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 3px;
    border-radius: 12px;
    background-color: rgba(37, 37, 37, 255);
    font-family: "Fira Sans", sans-serif;
    color: white;
    border: 0;
}

.p1 {
    font-size: 18px;
    font-family: "Fira Sans", sans-serif;
    color: azure;
}

.imagePreviewWrapper {
    border: 1px solid black;
    width: 320px;
    height: 180px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

/* SHOW MODAL CONFIRM */
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.6s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    transition: opacity 0.6s ease;
}

.uploading-image {
    display: flex;
}

.btn2 {
    border-radius: 12px;
    border: 1px solid black;
    font-size: 16px;
    transition: 0.7s ease;
    cursor: pointer;
    font-family: "Fira Sans", sans-serif;
}

.btn2:hover {
    background-color: black;
    color: white;
    transition: 0.7s ease;
    border: 1px solid white;
}

/* SHOW MODAL CONFIRM */
</style>
