import { React, useState, useRef } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { SearchGrid } from "../components/SearchGrid";
import { SmallButton } from "../components/SmallButton";
import { search } from "../assets";

export default function Search() {
  document.title = "Search | ColorBrain";
  scrollTo(0, 0);
  const gridData = [
    {
      source: "search/A_3D_picture_of_a_hummingbird.png",
      description: "A 3D picture of a_hummingbird",
    },
    {
      source:
        "search/A_Delorean_like_car_in_a_dark_moody_place_with_neon_lights_with_light_trails_behind_it.png",
      description:
        "A Delorean like car in a dark moody place with neon lights with light trails behind it",
    },
    {
      source: "search/a_beach_with_super_transparent_water_and_a_sunset.png",
      description: "a beach with super transparent water and a sunset",
    },
    {
      source:
        "search/A_handsome_pilot_wearing_a_thick_arctic_uniform_and_fur_lined_hood__fine_details.png",
      description:
        "A handsome pilot wearing a thick arctic uniform and fur lined hood fine details",
    },
    {
      source: "search/A_huge_city_underwater.png",
      description: "A huge city underwater",
    },
    {
      source:
        "search/A_vibrant_floral_watercolor__white_cat_moves_gracefully_on_impressionist_hues.png",
      description:
        "A vibrant floral watercolor white cat moves gracefully on impressionist_hues",
    },
    {
      source: "search/A_watercolour_painting_of_a_medieval_castle.png",
      description: "A watercolour painting of a medieval castle",
    },
    {
      source:
        "search/Black_bird_on_a_stone__watercolor__light_and_yellow_in_the_background.png",
      description:
        "Black bird on a stone watercolor light and yellow in the background",
    },
    {
      source: "search/blue_skin__elf__red_hair__blue__pretty__woman.png",
      description: "blue skin elf red hair blue pretty woman",
    },
    {
      source: "search/cartoon_portrait_of_a_cute_capybara_with_a_mustache.png",
      description: "cartoon portrait of a cute capybara with a mustache",
    },
    {
      source:
        "search/Colorfull_geometric_shapes_lines_and_Human_male_from_Middle_Eastern_countries_sizes_2.png",
      description:
        "Colorfull geometric shapes lines and Human male from Middle Eastern countries",
    },
    {
      source: "search/cute_white_anime_fox_with_blue_eyes.png",
      description: "cute white anime fox with blue eyes",
    },
    {
      source:
        "search/dark_dwarf_from_the_abyss_with_a_runic_symbol_on_his_forehead__occultist__discredited.png",
      description:
        "dark dwarf from the abyss with a runic symbol on his forehead occultist discredited",
    },
    {
      source:
        "search/dreamy__mystical__ethereal__abstract__curvy_bunny_eared_fertility_statue__floating_ne.png",
      description:
        "dreamy mystical ethereal abstract curvy bunny eared fertility statue floating",
    },
    {
      source: "search/Electrique.png",
      description: "Electrique",
    },
    {
      source: "search/Felted_wool_dream_creatures_with_outfit.png",
      description: "Felted wool dream creatures with outfit",
    },
    {
      source: "search/Japanese_young_cute_girl_against_flowers.png",
      description: "Japanese young cute girl against flowers",
    },
    {
      source:
        "search/Massive_jellyfish_with_big_transparent_tentacles_in_a_colorful_lighting.png",
      description:
        "Massive jellyfish with big transparent tentacles in a colorful lighting",
    },
    {
      source: "search/Mushrooms_painted_by_M__C__Escher.png",
      description: "Mushrooms painted by M C Escher",
    },
    {
      source:
        "search/Neon_lights_pulse_to_pounding_techno_in_smoky_nightclub.png",
      description: "Neon lights pulse to pounding techno in smoky nightclub",
    },
    {
      source: "search/rockwell_durer_mondrian_portraits.png",
      description: "rockwell durer mondrian portraits",
    },
    {
      source:
        "search/serene_lake_surrounded_by_lush_trees_and_vibrant_vegetation.png",
      description:
        "serene lake surrounded by lush trees and vibrant vegetation",
    },
    {
      source: "search/Sun_made_of_water.png",
      description: "Sun made of water",
    },
    {
      source: "search/sunflowers.png",
      description: "sunflowers",
    },
    {
      source: "search/vaporwave_casette_art.png",
      description: "vaporwave casette art",
    },
    {
      source: "search/Violet_panther__puma_in_front_milkyway.png",
      description: "Violet panther puma in front milkyway",
    },
    {
      source:
        "search/wallpaper_of_Japense_landscape_in_the_style_of_the_Dororo_Anime.png",
      description:
        "wallpaper of Japense landscape in the style of the Dororo Anime",
    },
    {
      source: "search/wide_view_of_Wildnres_with_Shrubbery_and_flowers.png",
      description: "wide view of Wilderness with Shrubbery and flowers",
    },
    {
      source:
        "search/Wolf_in_strong_dramatic_lighting__with_a_human_face__studio_photography__high_definit.png",
      description:
        "Wolf in strong dramatic lighting with a human face studio photography high definition",
    },
    {
      source: "search/Zdzis_aw_Beksi_ski_Junji_ito_cool_colors.png",
      description: "Zdzislaw Beksinski junji ito cool colors",
    },
  ];

  const [filter, setFilter] = useState("");

  const searchRef = useRef(null);

  return (
    <div>
      <div className="container flex flex-col items-center mx-auto px-10 py-36">
        <img src="search.png" className="w-80 mx-auto mb-10" />
        <h1 className="text-xl md:text-3xl mb-10 text-center">
          Discover the best of AI art: Our community's most popular creations
        </h1>
        <form className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <input
            type="text"
            placeholder="e.g. wolf"
            className="focus:border-green-900 border-2 w-full md:w-fit focus:outline-none text-black text-lg rounded-lg p-2"
            ref={searchRef}
          />
          <SmallButton
            type="button"
            text="Search"
            icon={search}
            handle={() => setFilter(searchRef.current.value)}
          />
        </form>
      </div>
      <SearchGrid data={gridData} filter={filter} />
      <Footer />
      <Navbar />
    </div>
  );
}
