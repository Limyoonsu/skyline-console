// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const DNS_RECORD_TYPE = {
  A: { name: t('Address Record'), nameExtra: 'example.com', recordsExtra: '192.168.1.1' },
  AAAA: { name: t('IPv6 Address Record'), nameExtra: 'example.com', recordsExtra: '2001:db8:3333:4444:5555:6666:7777:8888' },
  CAA: {
    name: t('Certificate Authority Authorization Record'),
    nameExtra: 'example.com',
    recordsExtra: '0 iodef mailto:security@example.com <ul><li><b>0:</b> is flag. An unsigned integer between 0-255.</li> <li><b>iodef:</b> An ASCII string that represents the identifier of the property represented by the record.<br />Available Tags: "issue", "issuewild", "iodef"</li><li><b>mailto:security@example.com:</b> The value associated with the tag.</li></ul>'
  },
  CNAME: { name: t('Canonical Name Record'), nameExtra: 'first.example.com', recordsExtra: 'other-example.com' },
  MX: { name: t('Mail Exchange Record'), nameExtra: 'example.com', recordsExtra: '10 mail.example.com <ul><li><b>10:</b> Priority</li> <li><b>mail.example.com:</b> Value</li></ul>' },
  NS: { name: t('Name Server'), nameExtra: 'example.com', recordsExtra: 'ns1.example.com' },
  PTR: { name: t('Pointer Record'), nameExtra: 'example.com', recordsExtra: '1.1.0.192.in-addr.arpa.' },
  SOA: {
    name: t('Start Of Authority'),
    nameExtra: 'example.com',
    recordsExtra: 'ns1.example.com admin.example.com 2013022001 86400 7200 604800 300 <ul><li>The primary name server for the domain, which is ns1.example.com or the first name server in the vanity name server list.</li><li>The responsible party for the domain: admin.example.com.</li><li>A timestamp that changes whenever you update your domain.</li><li>The number of seconds before the zone should be refreshed.</li><li>The number of seconds before a failed refresh should be retried.</li><li>The upper limit in seconds before a zone is considered no longer authoritative.</li><li>The negative result TTL (for example, how long a resolver should consider a negative result for a subdomain to be valid before retrying).</li></ul>',
  },
  SPF: {
    name: t('Sender Policy Framework'),
    nameExtra: 'example.com',
    recordsExtra: '"v=spf1 ipv4=192.1.1.1 include:examplesender.email +all" <ul><li><b>v=spf1:</b> Tells the server that this contains an SPF record. Every SPF record must begin with this string.</li> <li><b>Guest List:</b> Then comes the “guest list” portion of the SPF record or the list of authorized IP addresses. In this example, the SPF record is telling the server that ip4=192.0.2.0 and ip4=192.0.2.1 are authorized to send emails on behalf of the domain.</li> <li><b>include:examplesender.net:</b> is an example of the include tag, which tells the server what third-party organizations are authorized to send emails on behalf of the domain. This tag signals that the content of the SPF record for the included domain (examplesender.net) should be checked and the IP addresses it contains should also be considered authorized. Multiple domains can be included within an SPF record but this tag will only work for valid domains.</li><li><b>-all:</b> Tells, the server that addresses not listed in the SPF record are not authorized to send emails and should be rejected.</li></ul>'
  },
  SRV: {
    name: t('Service Locator'),
    nameExtra: '_sip._tcp.example.com. <ul><li><b>_sip:</b> represents the name of the service.</li> <li><b>_tcp:</b> represents the protocol of the service, this is usually either TCP or UDP.</li><li><b>example.com:</b> represents the domain in which this record is for.</li></ul>',
    recordsExtra: '10 0 5060 server1.example.com. <ul><li>"10" is the priority of the record. The lower the value, the higher the priority.</li><li>20 is the weight of the record. This is the weight of which this record has a chance to be used when there are multiple matching SRV records of the same priority.</li><li>5060 is the port of the record. This specifies the port on which the application or service is running.</li> <li>server1.example.com is the target of the record. This specifies the domain of the application or service the record is for. SRV records must specify a target which is either an A record or AAAA record, and may not use CNAME records.</li></ul>'
  },
  SSHFP: {
    name: t('SSH Public Key Fingerprint'),
    nameExtra: 'example.com',
    recordsExtra: '4 2 123456789abcdef67890123456789abcdef67890123456789abcdef123456789 <ul> <li><b>4 is Algorithm:</b> Algorithm (0: reserved; 1: RSA; 2: DSA, 3: ECDSA; 4: Ed25519; 6:Ed448)</li> <li><b>2 is Type:</b> Algorithm used to hash the public key (0: reserved; 1: SHA-1; 2: SHA-256)</li> <li><b>Last parameter is Fingerprint:</b> Hexadecimal representation of the hash result, as text</li> </ul>'
  },
  TXT: { name: t('Text Record'), nameExtra: 'example.com' },
};