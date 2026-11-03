const IMAGES = {
  portrait: "assets/images/wm/william-moore.jpg",
  aldershot: "assets/images/wm/royal-artillery-aldershot.jpg",
  rha: "assets/images/wm/warwickshire-rha-1912.jpg",
  cottage: "assets/images/wm/school-cottage-1967.jpg",
};

const styles = `
  .mbm {
    --ink: #1f2933;
    --muted: #5b6770;
    --accent: #7a1f2b;
    --paper: #fbf9f4;
    --rule: #d9d2c3;
    background: var(--paper);
    color: var(--ink);
    font-family: Georgia, "Times New Roman", serif;
    line-height: 1.75;
    min-height: 100vh;
  }
  .mbm * { box-sizing: border-box; }
  .mbm-wrap { max-width: 760px; margin: 0 auto; padding: 56px 24px 80px; }
  .mbm-header { text-align: center; margin-bottom: 48px; }
  .mbm-author {
    font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--muted); margin: 0 0 12px;
  }
  .mbm-title { font-size: clamp(2rem, 6vw, 3.25rem); line-height: 1.15; margin: 0 0 12px; color: var(--accent); }
  .mbm-subtitle { font-size: 1.35rem; font-style: italic; color: var(--muted); margin: 0; }
  .mbm-divider { width: 80px; height: 2px; background: var(--accent); margin: 28px auto 0; border: 0; }
  .mbm h2 {
    font-size: 1.6rem; margin: 52px 0 16px; padding-bottom: 8px;
    border-bottom: 1px solid var(--rule); color: var(--accent);
  }
  .mbm p { margin: 0 0 1.1em; }
  .mbm figure { margin: 32px 0; text-align: center; }
  .mbm figure img {
    max-width: 100%; height: auto; display: block; margin: 0 auto;
    border: 6px solid #fff; box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
  }
  .mbm figure.portrait img { max-width: 340px; }
  .mbm figcaption { margin-top: 12px; font-size: 0.9rem; font-style: italic; color: var(--muted); }
  .mbm-photo-note { font-size: 0.95rem; color: var(--muted); text-align: center; margin-top: -12px; }
  @media (max-width: 520px) {
    .mbm-wrap { padding: 36px 18px 56px; }
    .mbm h2 { font-size: 1.35rem; }
  }
`;

export default function Wm() {
  return (
    <div className="mbm">
      <style>{styles}</style>

      <article className="mbm-wrap">
        <header className="mbm-header">
          <p className="mbm-author">Zakerias Rowland-Jones</p>
          <h1 className="mbm-title">The Man Behind the Medals</h1>
          <p className="mbm-subtitle">Sergeant William Moore</p>
          <hr className="mbm-divider" />
        </header>

        <figure className="portrait">
          <img src={IMAGES.portrait} alt="Sergeant William Moore" />
          <figcaption>Figure 1 - Sergeant William Moore</figcaption>
        </figure>

        <section>
          <h2>Introduction</h2>
          <p>
            Every year on Remembrance Sunday, I proudly wear my great-great-grandfather's World War I
            campaign medals: the 1914 Star, the British War Medal, and the Victory Medal. My dad gave me
            these medals to cherish and look after, and I am incredibly proud to be related to him. I feel
            this short biography is a fitting tribute to a man who no longer has a voice, ensuring that a
            legacy which has nearly faded from living memory is preserved for generations to come.
          </p>
        </section>

        <section>
          <h2>Early Years (1871-1899)</h2>
          <p>
            William Moore was born on 26th February 1871 in Rowington, Warwickshire, to Edward and Ann
            Moore. At 18 years old, he enlisted in the Army on 5th November 1889 at Seaforth, where he was
            assigned to the Southern Division. The following day, he was formally attested as a Gunner in
            the Royal Artillery. He was transferred to the Field Artillery branch in 1893 and appointed
            Bombardier in July 1896. On 5th November 1896, having completed his initial seven years of
            active duty, he transferred out of full-time active service and entered the 1st Class Army
            Reserve.
          </p>
          <p>
            Following his transfer to the Army Reserve, William moved to London to build a civilian life,
            joining the Metropolitan Police Force as a Police Constable in the M Division (Southwark). It
            was during his time on the London beat that he met Sophia Frances Dimmack. The couple were
            married on 6th June 1897 at the Parish Church of St Antony in Nunhead, and two years later, on
            21st April 1899, they welcomed their first child, a daughter named Eliza Sophia Moore, born in
            Bermondsey.
          </p>
        </section>

        <section>
          <h2>The Anglo-Boer War (1899-1902)</h2>
          <p>
            On 13th November 1899, William was recalled to Army Service under Special Army Order due to the
            outbreak of war in South Africa. The Met Police formally suspended his active police duties and
            placed him on a military leave of absence. He rejoined the Royal Field Artillery as a Gunner.
          </p>
          <p>
            As a part of the 19th Battery, Royal Field Artillery, William spent months fighting his way
            across the treacherous Tugela River to rescue the starving British garrison trapped inside
            Ladysmith. He was promoted quickly, first to Bombardier, then to Corporal and finally Sergeant.
          </p>
          <p>
            Following the relief of Ladysmith in February 1900, William's unit advanced into the Orange
            Free State, witnessing the capture of its capital, Bloemfontein, in March. Their advance
            continued north into the Transvaal, as the campaign moved towards Johannesburg and Pretoria,
            both of which fell by June 1900.
          </p>
          <p>
            In September 1900, William took part in a high-speed advance over the steep De Kaap mountains
            to catch a strategic Boer stronghold by surprise. The town of Barberton surrendered on 13th
            September 1900 and over 100 British prisoners were liberated.
          </p>
          <p>
            William remained in South Africa for the final phase of the war in 1901 and 1902. His battery
            supported the British blockhouse system, undertaking patrols and operations to track the mobile
            Boer guerrilla forces. He remained in South Africa until the end of the conflict, returning home
            in June 1902.
          </p>
          <p>
            Following the conclusion of the Boer War, William was selected from hundreds of men for a
            highly exclusive, “one man per unit” honour to represent the 19th Battery, Royal Field
            Artillery back in England. He was posted back home on 7th June 1902, where he almost certainly
            took part in the grand coronation military celebrations for King Edward VII on 9th August 1902.
          </p>
        </section>

        <section>
          <h2>The Aldershot Instructor Years (1902-1914)</h2>
          <p>
            On 22nd July 1902 William signed papers to re-engage and complete 21 years “with the colours”
            to secure a full regular pension. The very next day, he left the Metropolitan Police, as his
            future was now firmly committed to his regular military career. This commitment saw him and his
            family relocate to Wellington Lines, Aldershot, the historic red-brick heart of the British
            Army.
          </p>

          <figure>
            <img
              src={IMAGES.aldershot}
              alt="A view of the Royal Artillery in Waterloo Barracks West, c. 1910"
            />
            <figcaption>Figure 2 - A view of the Royal Artillery in Waterloo Barracks West, c. 1910.</figcaption>
          </figure>

          <p>
            During his subsequent years stationed at Aldershot, William achieved highly advanced military
            qualifications. He successfully passed courses at Woolwich and the School of Gunnery, and
            earned a 2nd Class Certificate of Education on 6th March 1903. As a senior regular Sergeant,
            William was granted married quarters within this massive garrison, providing a stable home
            where his son, Frank Edward Moore, was subsequently born in April 1904.
          </p>
          <p>
            William remained on active duty until 1911, when he successfully completed his full 21 years of
            unblemished regular service with the colours. He was demobilised from the regular army on 3rd
            January 1911.
          </p>
          <p>
            Just two months later he reenlisted into the Army on 11th March 1911 at Warwick, now age 40,
            with a terms of service of 4 years. His regiment is listed as the 1st Warwickshire Battery of
            the Royal Horse Artillery.
          </p>

          <figure>
            <img
              src={IMAGES.rha}
              alt="William commanding a horse-drawn artillery section of the Warwickshire R.H.A., 1912"
            />
            <figcaption>
              Figure 3 - William commanding a horse-drawn artillery section of the Warwickshire R.H.A., 1912
            </figcaption>
          </figure>

          <p className="mbm-photo-note">
            Taken during a summer training camp at Aldershot in 1912, this photograph captures 41-year-old
            William commanding a horse-drawn artillery section of the Warwickshire Royal Horse Artillery.
          </p>
        </section>

        <section>
          <h2>The Great War Era (1914-1939)</h2>
          <p>
            He was recalled into active service on 5th August 1914, just one day after Britain declared war
            on Germany. He embarked for France about 12 weeks later on 29th October 1914 as part of the
            historic first Territorial artillery unit sent overseas.
          </p>
          <p>
            In November 1914, William's unit, was selected for the deeply solemn duty of providing the
            horse-drawn gun carriage for Field Marshal Lord Roberts' funeral procession in St. Omer,
            France. As a veteran Sergeant, William served directly within the cortege, escorting the body of
            his former South African commander past lines of mourning Allied troops to the railway station.
          </p>
          <p>
            William's front-line war was cut short in March 1915 when a fall from his horse caused him to
            be hospitalised at Rouen and subsequently evacuated to Britain for treatment. Due to his age
            and the physical toll of his injuries, he was withdrawn from combat in 1916 and took up a vital
            position as an instructor at Bulford Camp in Wiltshire.
          </p>
          <p>
            His veteran experience became even more critical in the spring of 1918 when the German Army
            launched a massive offensive. Facing a severe manpower crisis, the British Government passed a
            new Military Service Act in April 1918, which raised the conscription age to 51. While this act
            kept older men in the fight, a Travelling Medical Board formally confirmed that William was
            physically unfit for front-line trench warfare, ensuring he spent the remainder of the war
            using his decades of expertise to prepare the next generation of recruits for the battlefield.
          </p>
          <p>
            Following his demobilisation in May 1919, William transitioned into civilian public service,
            securing a position as a School Attendance Officer for Warwickshire County Council. His
            family's pride in his immense military legacy was cemented in 1920 when his daughter, Eliza,
            gave birth to a son named William Moore Burton in his honour, a grandson who would boldly
            follow his grandfather's footsteps by serving in the Royal Air Force during World War II.
          </p>
          <p>
            In 1922, William relocated his family to School Cottage in Over Whitacre, a home that became
            the centre of his community life for nearly two decades before it was sadly demolished years
            later for road improvements.
          </p>
          <p>
            Throughout his long civilian retirement, William remained an anchor of village life; he served
            as a dedicated representative for the British Legion, managed the financial books as the
            Treasurer of St. Leonard's Men's Club, and acted as Secretary for the Over Whitacre and
            District Horticultural Society.
          </p>
          <p>
            A passionate gardener himself, William cultivated a large flower, fruit, and vegetable plot at
            his cottage, pouring his discipline into the society's annual August show, which attracted
            hundreds of competitors and proudly survives today as the Whitacres &amp; Shustoke
            Horticultural Society Annual Show.
          </p>

          <figure>
            <img src={IMAGES.cottage} alt="School Cottage, Over Whitacre, 1967" />
            <figcaption>Figure 4 - School Cottage, Over Whitacre, 1967</figcaption>
          </figure>
        </section>

        <section>
          <h2>Later Years &amp; Civil Defence (1939-1966)</h2>
          <p>
            Despite his extensive public achievements, William's foundational identity always remained that
            of a traditional bootmaker, a highly skilled craft he proudly learned from his father, Edward
            Moore. The military had actively utilised this intergenerational trade decades prior,
            officially qualifying him as an Army Standard Shoemaker on his service sheets. When World War
            II arrived, the aging veteran stepped up once more, serving his final duty to his country as a
            dedicated ARP Warden for the Meriden Rural District during the Blitz.
          </p>
          <p>
            The ultimate crown to his sixty-year journey of service came on 29th March 1951. Standing
            proudly on the parade square at Whittington Barracks, Lichfield, the 80-year-old veteran was
            formally presented with the prestigious Meritorious Service Medal by Brigadier Mervyn Wheatley
            in recognition of a lifetime of exemplary, unblemished duty.
          </p>
          <p>
            William lived to the extraordinary age of 95, passing away in 1966. He was laid to rest with
            his beloved wife, Sophia, in an unmarked grave at Over Whitacre, leaving behind a monumental
            legacy of quiet duty that spanned four monarchs and protected both his country and his county.
          </p>
        </section>
      </article>
    </div>
  );
}