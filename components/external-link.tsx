type ExternalLinkProps = { domain: string; className?: string };

export function ExternalLink({ domain, className = "url" }: ExternalLinkProps) {
  return (
    <a className={className} href={`https://${domain}`} target="_blank" rel="noopener">
      {domain} &#8599;
    </a>
  );
}
