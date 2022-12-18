/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "../../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../assets/images/rotating-card-bg-front.jpeg";
import bgBack from "../../../assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Learn About
                    <br />
                    What We Do
                  </>
                }
                description={<div><br /></div>}
              />
              <RotatingCardBack
                image={bgBack}
                title="Apply to Join"
                // description="Join an elite clan of gamers, developers, warrers, and casual chatters"
                description={<span style={{textShadow: "2px 2px 4px #555"}}>
                  Join an elite clan of gamers, developers, warrers, and casual chatters
                </span>}
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="sports_esports"
                  title="Gaming"
                  description="From Starcraft to Diablo to Warcraft, and everything in between, we love gaming"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="code"
                  title="Development"
                  description="Bots, bots, bots, and more bots – chat or load, we do it all"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="local_fire_department"
                  title="Warring"
                  description="Whether reconnecting, loading, or flooding, our warrers are raging"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="chat"
                  title="Casual"
                  description="Just want to hang out and talk?  We do that too!"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
