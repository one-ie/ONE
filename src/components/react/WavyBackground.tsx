import { WavyBackground } from "@/components/react/aceternityui/WavyBackground";


export function WavyBackgroundDemo() {
	return (
		<WavyBackground id="hero" className="primary-background hero max-w-4xl mx-auto pb-40">
			<section >
				<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-4xl base-content">
					<h1 className="text-4xl font-bold leading-none sm:text-5xl ">Your <span className="">AI Workforce</span>
						<span className=""> Awaits</span>
					</h1>
					<p className="px-8 mt-8 mb-12 text-lg">Accellerate marketing, sales, service and engineering with AI agents that do important jobs in your enterprise and life.
					</p>
					<div className="flex flex-wrap justify-center">
						<a href="https://my.one.ie/login">
							<button className="px-8 py-3 m-2 font-medium btn btn-rounded focus">START NOW</button></a>
						<a href="#stats">

							<button className="px-8 py-3 m-2 border btn btn-muted btn-rounded neutral">LEARN MORE...</button>
						</a>
					</div>
					<p className="px-8 mt-8 mb-12">Free Forever. <a className="link link-underline" href="/guides/how-to-profit-with-mit-and-open-source/"> MIT License. </a>
					</p>
				</div>
			</section>
		</WavyBackground>
	);
}

<style lang="stylus">
	#hero, hero
		padding:0px
		margin-bottom:-150px
		margin-bottom:-150px
</style>
export default WavyBackgroundDemo;



