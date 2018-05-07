import { Component } from '@angular/core';
import { Listing } from './models/listing.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listings: Listing[] = [
    new Listing('Im a Guy Walking at mount tabor this morning.', '(Ne)', '', 'Im a guy in his 30s heading out to the park this morning for a walk and seeing if anyone wants to join me? Im heading to mount tabor to walk around for a bit and spend my morning. Looking for a female no dudes, from Southern California visiting, white with dark features'),
    new Listing('Visiting on business, show me the city', '(Tualatin/portland)', '', 'I am male and will be in the portland area on business for the first full week in June and would like a fun couple to hang out with in the evenings and show me the fun places around the city. If you are interested I look forward to hearing from you.'),
    new Listing('BASEBALL', '(Vancouver)', '', 'Want to play baseball again. Looking for players that want to have fun Southwest Washington Adult Baseball League. This is our fourth season. We play at Hockinson Community Park on Sundays. My team looking for players'),
    new Listing('BABY BOOMERS/Dances!!!', '(PDX /VANC)', '', 'Baby Boomer age folks that want to attend dance activities. Love to East Coast Swing dance. Just want some people to attend dancing activities. We try to attend different venues for a variety of music and of course dancing. Hit me up if you would like to meet up at an activity we are attending. A couple of us ladies are attending different venues.'),
    new Listing('BICYCLE PARTNERS NEEDED', '(HILSBORO)', '', 'Blind man looking for partners to ride with me on my side by side recumbent bike. No balance necessary-- easy to learn. Great way to get in shape. Willing to ride at your pace and limitation in the Hillsboro area.'),
    new Listing('Have you looked at the weather?', '', '', 'We are a fun, outgoing, recreational dragon boat team. Except we have the competitive spirit with out the stigma of always have to be first or its not fun. Our practice schedule is Sunday, Tuesday and Thursday nights at 7. Usually every Tuesday we have tacos on the waterfront. All in all we are a great group to be around. If you join us you will become one of Team Fusions family. Even those that believe they are the black sheep. We do not care what ability you have, never picked up a paddle to experienced paddler.'),
    new Listing('PADDLERS WANTED FOR FUN DRAGON BOAT TEAM - NO EXPERIENCE REQUIRED', '(Waterfront)', '', 'For 12 years, Team Fusion has been helping paddlers from diverse backgrounds come together for fun, friendship, fitness and competition. Now were looking for paddlers of all experience and ability levels to join the team. Well teach you our stroke and support you as you work to improve your form and grow stronger with a supportive group of friends.')
  ];

  selectedListing = null;

  viewListing(clickedListing){
    this.selectedListing = clickedListing;
  }

}
