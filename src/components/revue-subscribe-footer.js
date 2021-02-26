import React from "react"


export default function RevueSubscribeFooter({ children }) {

    return (
        <div id="revue-subscribe" class="text-center p-6 md:mx-32 mt-10 rounded-lg">
            <div class=" text-xl md:text-3xl font-bold text-primary-900">
              Subscribe to ⚡Fractional.
              </div>
              <div class="mt-4 text-primary-900">
                For more content like this and curated content on thinking, investing and tech delivered right to your inbox every week. See past issues <a href="https://email.thinkbetter.blog" class="inline-link">here</a>.
              </div>
              <div class="hidden align-center justify-items-center mx-8 my-4">
                <img src={'../../../darkcoverpic.jpg'} class="rounded-lg " />
              </div>
              <div id="revue-embed">
              <form action="https://www.getrevue.co/profile/thoughtsbyhkr/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
              <div class="revue-form-group text-lg font-semibold text-primary-900 mt-4">
                <label for="member_email">Email address</label>
                <input class="revue-form-field rounded-md h-8 pl-2 md:ml-4 text-primary-100 bg-gray-100 text-md md:text-xl focus:outline-none" placeholder="Your email address..." type="email" name="member[email]" id="member_email"/>
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
                <input type="submit" value="Subscribe" class="mt-4 hover:bg-primary-300  text-sm font-bold bg-secondary-500 rounded-md  text-primary-100 p-2 px-4" name="member[subscribe]" id="member_submit"/>
              </div>
              <div class="revue-form-footer text-xs text-primary-900 mt-2">Unsubscribe anytime. By subscribing, you agree with Revue’s <a target="_blank" class="inline-link" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" class="inline-link" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
              </form>
            </div>
        </div>
    );
}
