// html.d.ts tells typescript that this is a normal thing to do
import htmlString from './index.html'

export default {
	async fetch(req: Request, ctx: ExecutionContext): Promise<Response> {
		return new Response(htmlString, {
			headers: {
				"content-type": "text/html",
				"cache-control": "public, max-age=7200"
			}
		});
	},
};
