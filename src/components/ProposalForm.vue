<template>
  <div>
    <h1>Create a proposal</h1>
    <form>

        
      <div>
        <ProposalFirst>
                      
        </ProposalFirst>
        <ProposalSecond />
        <ProposalThird />
        <ProposalFourth />
        <ProposalFifth />
        <ProposalSixth />
        <ProposalSeventh />

        <input
            type="radio"
            v-model="event.pets"
            :value="1"
            name="pets"
          />
        <label>Yes</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="event.pets"
          :value="0"
          name="pets"
        />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input
          type="checkbox"
          v-model="event.extras.catering"
          class="field"
        />
        <label>Catering</label>
      </div>

      <div>
        <input
          type="checkbox"
          v-model="event.extras.music"
          class="field"
        />
        <label>Live music</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import ProposalFirst from './forms/ProposalFirst';
import ProposalSecond from './forms/ProposalSecond';
import ProposalThird from './forms/ProposalThird';
import ProposalFourth from './forms/ProposalFourth';
import ProposalFifth from './forms/ProposalFifth';
import ProposalSixth from './forms/ProposalSixth';
import ProposalSeventh from './forms/ProposalSeventh';

export default {
    components: {
        ProposalFirst,
        ProposalSecond,
        ProposalThird,
        ProposalFourth,
        ProposalFifth,
        ProposalSixth,
        ProposalSeventh
    },
    data () {
        return {
        categories: [
            'sustainability',
            'nature',
            'animal welfare',
            'housing',
            'education',
            'food',
            'community'
        ],
        event: {
            category: '',
            title: '',
            description: '',
            location: '',
            pets: 1,
            extras: {
            catering: false,
            music: false
            }
        },
      
    }
  }
}
</script>