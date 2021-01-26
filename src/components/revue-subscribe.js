import React from "react"


export default function RevueSubcribe({ children }) {

    return (
        <div id="revue-subscribe" class="p-6 mx-6 border-2 border-secondary-500 rounded-lg">
           
            <div id="revue-embed">
            <form action="https://www.getrevue.co/profile/thoughtsbyhkr/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
            <div class="revue-form-group p-2 uppercase text-sm font-bold">
              <label for="member_email">Email address</label>
              <input class="revue-form-field rounded-md h-8 md:pl-2 md:ml-4 text-primary-100 bg-primary-900 text-sm md:text-md focus:outline-none" placeholder="Your email address..." type="email" name="member[email]" id="member_email"/>
            </div>
            <div class="revue-form-group hidden">
              <label for="member_first_name">First name <span class="optional">(Optional)</span></label>
              <input class="revue-form-field" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name"/>
            </div>
            <div class="revue-form-group hidden">
              <label for="member_last_name">Last name <span class="optional">(Optional)</span></label>
              <input class="revue-form-field" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name"/>
            </div>
            <div class="revue-form-actions ">
              <input type="submit" value="Subscribe" class="hover:bg-primary-300 uppercase text-sm font-bold bg-secondary-500 rounded-md text-primary-900 p-2" name="member[subscribe]" id="member_submit"/>
            </div>
            <div class="revue-form-footer text-xs">By subscribing, you agree with Revue’s <a target="_blank" class="inline-link" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" class="inline-link" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
            </form>
          </div>

        </div>
    );
}
